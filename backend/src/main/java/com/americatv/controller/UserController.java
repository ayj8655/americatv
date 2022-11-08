package com.americatv.controller;

import java.io.IOException;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.entity.User;
import com.americatv.service.BlackListService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.americatv.dto.LoginDto;
import com.americatv.dto.TokenDto;
import com.americatv.entity.BookMark;
import com.americatv.service.BookMarkService;
import com.americatv.jwt.JwtFilter;
import com.americatv.jwt.TokenProvider;
import com.americatv.service.UserService;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = "/ayj")
public class UserController {

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	private static final String ERROR = "error";

	private final TokenProvider tokenProvider;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;

	@Autowired
	private final PasswordEncoder passwordEncoder;
	
	public UserController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder, PasswordEncoder passwordEncoder) {
		this.tokenProvider = tokenProvider;
		this.authenticationManagerBuilder = authenticationManagerBuilder;
		this.passwordEncoder = passwordEncoder;
	}

	

	
	
	@Autowired
	public UserService userService;
	public BookMarkService bookMarkService;

	@Autowired
	public BlackListService blacklistservice;

	@GetMapping("/hello")
	@ApiOperation(value = "API 테스트용", notes = "Hello 반환하면 정상")
	public ResponseEntity<String> hello() {
		return ResponseEntity.ok("hello");
	}

	@PostMapping("/signup")
	@ApiOperation(value = "회원가입", notes = "아이디,비밀번호,생년월일,이메일,닉네임,이름,핸드폰번호 입력시 회원가입", response = User.class)
	public ResponseEntity<User> signup(@Valid @RequestBody User userDto) {
		return ResponseEntity.ok(userService.signup(userDto));
	}

	@PostMapping("/authenticate")
	@ApiOperation(value = "로그인 및 인증", notes = "로그인 및 인증 토큰을 헤더 및 바디를 통해 반환", response = TokenDto.class)
	public ResponseEntity<TokenDto> authorize(@Valid @RequestBody LoginDto loginDto) {
		System.out.println(loginDto.getUserId());
		System.out.println(loginDto.getUserPw());
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
				loginDto.getUserId(), loginDto.getUserPw());

		System.out.println(authenticationToken);
		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = tokenProvider.createToken(authentication);

		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

		return new ResponseEntity<>(new TokenDto(jwt), httpHeaders, HttpStatus.OK);
	}

	@RequestMapping(value = "/{userId}", method = RequestMethod.DELETE)
	@PreAuthorize("hasAnyRole('USER','ADMIN')")
	@ApiOperation(value = "유저아이디로 회원 탈퇴", notes = "유저아이디를 받아 해당 유저 탈퇴", response = String.class)
	@ApiImplicitParams({ @ApiImplicitParam(name = "userId", value = "탈퇴하고싶은 userId", required = true) })
	public ResponseEntity<String> withdraw(@PathVariable String userId) throws IOException {

		try {
			System.out.println(userService);
			boolean ret = userService.DeleteFromUserId(userId);

			if (!ret) {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}

			System.out.println("회원 탈퇴 성공");
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("회원 탈퇴 오류");
			return new ResponseEntity<String>(ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 유저 권한을 가진 사람이 본인 정보 가져올때 사용
	@GetMapping("/user")
	@PreAuthorize("hasAnyRole('USER','ADMIN')")
	@ApiOperation(value = "자기 자신의 회원정보 검색", notes = "토큰을 통해 자기 자신의 정보를 가져온다", response = User.class)
	public ResponseEntity<User> getMyUserInfo(HttpServletRequest request) {
		try {
			Optional<User> user = userService.getMyUserWithAuthorities();

			if (!user.isPresent()) {
				return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
			}

			System.out.println("회원정보 있음");
			return new ResponseEntity<User>(user.get(), HttpStatus.OK);

		} catch (Exception e) {
			System.out.println("회원정보 검색 오류");
			return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
//		return ResponseEntity.ok(userService.getMyUserWithAuthorities());
	}

	// 어드민 권한을 가진 사람만 콜 할 수 있음
	@GetMapping("/user/{username}")
	@PreAuthorize("hasAnyRole('ADMIN')")
	@ApiOperation(value = "타인의 회원정보 검색 (어드민 권한 전용)", notes = "타인의 아이디를 입력하면 유저 정보 리턴", response = User.class)
	public ResponseEntity<Optional<User>> getUserInfo(@PathVariable String username) {
		return ResponseEntity.ok(userService.getUserWithAuthorities(username));
	}

	// 아이디 중복 체크
	@RequestMapping(value = "/pass/confirmId/{userId}", method = RequestMethod.GET)
	@ApiOperation(value = "아이디 중복 체크", notes = "아이디를 입력하면 중복 여부를 체크한다. 중복이 없을시 200, 중복이라면 204, 서버 오류는 500")
	public ResponseEntity<String> confirmUserId(@PathVariable String userId) throws IOException {
		System.out.println(userService);
		try {
			Optional<User> user = userService.findByUserId(userId);

			if (!user.isPresent()) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}

			System.out.println("id중복 있음");
			return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);

		} catch (Exception e) {
			System.out.println("id중복 검사 오류");
			return new ResponseEntity<String>(ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 핸드폰번호 받아서 중복확인
	@RequestMapping(value = "/pass/confirmPhone/{phone}", method = RequestMethod.GET)
	@ApiOperation(value = "핸드폰 번호 중복 체크", notes = "핸드폰 번호를 입력하면 중복 여부를 체크한다. 중복이 없을시 200, 중복이라면 204, 서버 오류는 500")
	public ResponseEntity<String> confirmUserPhone(@PathVariable String phone) throws IOException {

		try {
			Optional<User> user = userService.findUserPhone(phone);
			if (!user.isPresent()) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}
			System.out.println("핸드폰번호중복 있음");
			return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			System.out.println("핸드폰번호중복 검사 오류");
			return new ResponseEntity<String>(ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// 이메일 받아서 중복확인
	@RequestMapping(value = "/pass/confirmEmail/{email}", method = RequestMethod.GET)
	@ApiOperation(value = "이메일 중복 체크", notes = "이메일을 입력하면 중복 여부를 체크한다. 중복이 없을시 200, 중복이라면 204, 서버 오류는 500")
	public ResponseEntity<String> confirmUserEmail(@PathVariable String email) throws IOException {

		try {
			Optional<User> user = userService.findUserEmail(email);
			if (!user.isPresent()) {
				return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
			}
			System.out.println("이메일중복 있음");
			return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			System.out.println("이메일번호중복 검사 오류");
			return new ResponseEntity<String>(ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.PUT)
	@PreAuthorize("hasAnyRole('USER','ADMIN')")
	@ApiOperation(value = "회원 정보 수정", notes = "수정 가능한 정보는 비밀번호, 이메일, 닉네임 3개만 가능, 성공시 200, 에러 or 실패시 204,500")
	public ResponseEntity<String> updateUser(@RequestBody User user) throws IOException {
		try {
			boolean ret = userService.updateByUserId(user);
			if (!ret) {
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}

			System.out.println("회원 수정 성공");
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println("회원 수정 에러");
			e.printStackTrace();
			return new ResponseEntity<String>(ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@PostMapping("/PwComfirm")
	@PreAuthorize("hasAnyRole('USER','ADMIN')")
	@ApiOperation(value = "유저 정보 수정 전 본인 확인", notes = "11111111")
	public ResponseEntity<String> PwComfirm(HttpServletRequest request, @RequestBody LoginDto loginDto) {
		try {
			Optional<User> user = userService.getMyUserWithAuthorities();

			if (!user.isPresent()) 
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);

		} catch (Exception e) {
			System.out.println("회원정보 검색 오류");
			return new ResponseEntity<String>(ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
		}
//			return ResponseEntity.ok(userService.getMyUserWithAuthorities());
	}

}

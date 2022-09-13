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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.entity.BlackList;
import com.americatv.entity.User;
import com.americatv.service.BlackListService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.dto.LoginDto;
import com.americatv.dto.TokenDto;
import com.americatv.entity.BookMark;
import com.americatv.service.BookMarkService;
import com.americatv.entity.User;
import com.americatv.jwt.JwtFilter;
import com.americatv.jwt.TokenProvider;
import com.americatv.service.UserService;

@RestController
@RequestMapping(value = "/ayj")
public class UserController {

	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	private static final String ERROR = "error";

	private final TokenProvider tokenProvider;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;

	public UserController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
		this.tokenProvider = tokenProvider;
		this.authenticationManagerBuilder = authenticationManagerBuilder;
	}

	@PostMapping("/authenticate")
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

	@Autowired
	public UserService userService;
	public BookMarkService bookMarkService;

	@Autowired
	public BlackListService blacklistservice;

	@GetMapping("/")
	public String index() {
		return "안녕";
	}

	@GetMapping("/hello")
	public ResponseEntity<String> hello() {
		return ResponseEntity.ok("hello");
	}

	@GetMapping("/user1111")
	public String ayj() {
		System.out.println(userService);

		Optional<User> user = userService.findeByUserId("ayj");
		System.out.println(user);
		return user.toString();
	}

	@PostMapping("/signup")
	public ResponseEntity<User> signup(@Valid @RequestBody User userDto) {
		return ResponseEntity.ok(userService.signup(userDto));
	}

	// 유저 권한을 가진 사람이 본인 정보 가져올때 사용
	@GetMapping("/user")
	@PreAuthorize("hasAnyRole('USER','ADMIN')")
	public ResponseEntity<Optional<User>> getMyUserInfo(HttpServletRequest request) {
		return ResponseEntity.ok(userService.getMyUserWithAuthorities());
	}

	// 어드민 권한을 가진 사람만 콜 할 수 있음
	@GetMapping("/user/{username}")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Optional<User>> getUserInfo(@PathVariable String username) {
		return ResponseEntity.ok(userService.getUserWithAuthorities(username));
	}

	// 아이디 중복 체크
	@RequestMapping(value = "/pass/confirmId/{userId}", method = RequestMethod.GET)
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

	@PostMapping("/bookmark")
	public String boookMark() {

		Optional<BookMark> bookmark = bookMarkService.findByUserCd(2);
		System.out.println(bookmark);
		return bookmark.toString();
	}

}

package com.americatv.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.dto.LoginDto;
import com.americatv.dto.TokenDto;
import com.americatv.entity.BlackList;
import com.americatv.entity.Broadcast;
import com.americatv.entity.User;
import com.americatv.jwt.JwtFilter;
import com.americatv.jwt.TokenProvider;
import com.americatv.service.BlackListService;
import com.americatv.service.BroadcastService;
import com.americatv.service.UserService;

import io.swagger.annotations.ApiOperation;


@RestController
@RequestMapping(value = "/broadcast")
public class BroadcastController {
	
    public BroadcastController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
    }
    
    @Autowired
	public BlackListService blackListService;
	
	@Autowired
	public BroadcastService broadcastService;
	
	@Autowired
	public UserService userService;
	
	@GetMapping("/")
	public String index() {
		return "방송 컨트롤러";
	}
	
	// @GetMapping에 value의 {안에있는}이 부분이랑  @PathVariable 부분의 뒤에 int 다음에 오는 것은 같아야함 
	@GetMapping(value = "/blackList/{user_cd}")
	@ApiOperation(value = "블랙리스트 조회", notes = "블랙당한 유저의 정보를 반환", response = TokenDto.class)
	public ResponseEntity<Optional<BlackList>> getbjuser(@PathVariable int user_cd) {
	    
		System.out.println(blackListService);
		
		Optional<BlackList> blackList = blackListService.findByUserCd(user_cd);
		System.out.println(blackList);
		return ResponseEntity.ok(blackListService.getUblacklist(user_cd));
	}
	
	@RequestMapping(value = "/blackList", method= {RequestMethod.POST})
	@ApiOperation(value = "112233", notes = "1313", response = TokenDto.class)
	public ResponseEntity<BlackList> postuser(@Valid @RequestBody BlackList blackDto){	 
	    
	   System.out.println(blackDto.getBlackUser());
	       
	    
	   return ResponseEntity.ok(blackListService.insertblackuser(blackDto));
	    
	}
	
	
	@GetMapping("/{userId}")
	public ResponseEntity<Optional<Broadcast>> GetBroadcastInfo(@PathVariable String userId){
		System.out.println(userId);
		Optional<User> user = userService.findeByUserId(userId);
		return ResponseEntity.ok(broadcastService.findeByUserCd(user.get().getUserCd()));
		
	}
	
		
	
}

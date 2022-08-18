package com.americatv.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.entity.BookMark;
import com.americatv.service.BookMarkService;
import com.americatv.entity.User;
import com.americatv.service.UserService;


@RestController
@RequestMapping(value = "/ayj")
public class UserController {
	
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	private static final String ERROR = "error";
	
	@Autowired
	public UserService userService;
	public BookMarkService bookMarkService;
	
	@GetMapping("/")
	public String index() {
		return "안녕";
	}
	
	
	@GetMapping("/user")
	public String ayj() {
		System.out.println(userService);
		
		Optional<User> user = userService.findeByUserId("ayj");
		System.out.println(user);
		return user.toString();
	}
	
	@PostMapping("/signup")
	public ResponseEntity<String> signup(@RequestBody User userDto) {
		System.out.println(userDto);
		try {
			User user = userService.signup(userDto);
			if (user == null) {
				
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}

		} catch (Exception e) {
			System.out.println("회원 가입 오류");
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);

	}
	
	
	@PostMapping("/bookmark")
	public String boookMark (){
		
		Optional<BookMark> bookmark = bookMarkService.findByUserCd(2);
		System.out.println(bookmark);
		return bookmark.toString();
	}
	
}


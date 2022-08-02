package com.americatv.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.entity.User;
import com.americatv.service.UserService;


@RestController
public class UserController {
	
	
	@Autowired
	public UserService userService;
	
	
	@GetMapping("/")
	public String index() {
		// git branch test
		return "안녕";
	}
	
	
	@GetMapping("/user")
	public String ayj() {
		System.out.println(userService);
		
		Optional<User> user = userService.findeByUserId("ayj");
		System.out.println(user);
		return user.toString();
	}
	
	
}

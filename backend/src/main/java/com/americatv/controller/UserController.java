package com.americatv.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.entity.BookMark;
import com.americatv.service.BookMarkService;
import com.americatv.entity.User;
import com.americatv.service.UserService;


@RestController
@RequestMapping(value = "/ayj")
public class UserController {
	
	
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
	
	
	@PostMapping("/bookmark")
	public String boookMark (){
		
		Optional<BookMark> bookmark = bookMarkService.findByUserCd(2);
		System.out.println(bookmark);
		return bookmark.toString();
	}
	
}


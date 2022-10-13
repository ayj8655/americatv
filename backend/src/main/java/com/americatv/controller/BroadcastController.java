package com.americatv.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.entity.BlackList;
import com.americatv.entity.Broadcast;
import com.americatv.entity.User;
import com.americatv.service.BlackListService;
import com.americatv.service.BroadcastService;
import com.americatv.service.UserService;


@RestController
@RequestMapping(value = "/broadcast")
public class BroadcastController {
	
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
	
	@PostMapping("/blackList")
	public String ayj() {
		System.out.println(blackListService);
		
		Optional<BlackList> blackList = blackListService.findByUserCd(1);
		System.out.println(blackList);
		return blackList.toString();
	}
	
	
	
	@GetMapping("/{userId}")
	public ResponseEntity<Optional<Broadcast>> GetBroadcastInfo(@PathVariable String userId){
//		System.out.println(userId);
		Optional<User> user = userService.findeByUserId(userId);
		return ResponseEntity.ok(broadcastService.findeByUserCd(user.get().getUserCd()));
		
	}
	
	
	
}

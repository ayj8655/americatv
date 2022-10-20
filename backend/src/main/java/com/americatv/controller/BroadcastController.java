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
import com.americatv.service.BlackListService;


@RestController
@RequestMapping(value = "/broadcast")
public class BroadcastController {
	
	
    @Autowired
	public BlackListService blackListService;
	
	@GetMapping("/")
	public String index() {
		return "방송 컨트롤러";
	}
	
	// @GetMapping에 value의 {안에있는}이 부분이랑  @PathVariable 부분의 뒤에 int 다음에 오는 것은 같아야함 
	@GetMapping(value = "/blackList/{user_cd}")
	public ResponseEntity<Optional<BlackList>> getbjuser(@PathVariable int user_cd) {
	    
		System.out.println(blackListService);
		
		Optional<BlackList> blackList = blackListService.findByUserCd(user_cd);
		System.out.println(blackList);
		return ResponseEntity.ok(blackListService.getUblacklist(user_cd));
	}
	
//	@PostMapping(value = "/blackList")
//	public ResponseEntity<Optional<BlackList>> postuser(@PathVariable String black_user){
//	    System.out.println(blackListService);
//	    
//	    return ResponseEntity.ok(blackListService.postblacklist(black_user));
//	    
//	}
	
}

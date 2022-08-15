package com.americatv.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@GetMapping("/blackList")
	public String ayj() {
		System.out.println(blackListService);
		
		Optional<BlackList> blackList = blackListService.findByUserCd(1);
		System.out.println(blackList);
		return blackList.toString();
	}
	
	
}

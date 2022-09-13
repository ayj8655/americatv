package com.americatv.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.entity.Board;
import com.americatv.entity.User;
import com.americatv.service.BoardService;
import com.americatv.entity.*;
import com.americatv.*;


@RestController
@RequestMapping(value="/yjy")

public class BoardController {
	
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";
	private static final String ERROR = "error";
	
	@Autowired
	public BoardService boardService;
	
	
	@PostMapping("/post")	
	public ResponseEntity<String> signup(@RequestBody Board postDto) {
		System.out.println(postDto.getBoardContent()+postDto.getUserCd()+postDto.getBoardTitle());
		try {
			Board board = boardService.post(postDto);
			if (board.getUserCd() == null) {	//유저아이디 정보가 없으면 실패
				
				return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
			}

		} catch (Exception e) {
			System.out.println("아이디 정보가 없습니다.");
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);

	}

}

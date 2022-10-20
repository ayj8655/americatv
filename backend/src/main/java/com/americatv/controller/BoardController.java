package com.americatv.controller;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.entity.Board;
import com.americatv.entity.User;
import com.americatv.service.BoardService;
import com.americatv.service.UserService;
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
	public UserService userService;
	
	@PostMapping("/post")	
	public ResponseEntity<String> post(@RequestBody Board postDto) {
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
	@GetMapping("/read/{boardcd}")
    public ResponseEntity<Optional<Board>> getBoardInfo(@PathVariable int boardcd) {
        System.out.println(boardService);
        
        Optional<Board> board = boardService.findByBoardCd(boardcd);
        System.out.println(board);
        return ResponseEntity.ok(board);
    }
	/*
     * 유준영 - 게시글 수정
     * 수정가능한 사용자인지 확인한다.        
     * 1. 확인이 된 경우   수정된 내용들을 받아온다.
     * 수정된 내용중 boardcd에 해당하는 db에 저장된 내용이 있는지 확인한다
     * 있으면 업데이트한다
     * 2. 확인이 안된경우
     * 수정 버튼을 안보이게하면됨
     */
	
	/*@GetMapping("/edit/{boardcd}")
	public ResponseEntity<Optional<Board>> BoardEdit(@PathVariable int boardcd) {
	    System.out.println(boardService);
	    Optional<Board> board = boardService.findByBoardCd(boardcd);
	    
	    try {
	        
	    }
	    
	    return ResponseEntity.ok(board);
	}*/

}

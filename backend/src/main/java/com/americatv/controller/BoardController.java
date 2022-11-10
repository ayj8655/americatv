package com.americatv.controller;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.americatv.entity.Board;
import com.americatv.entity.User;
import com.americatv.service.BoardService;
import com.americatv.service.UserService;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

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
    @ApiOperation(value = "게시글 작성", notes = "로그인 정보 확인하고 게시글을 작성한다", response = User.class)
    public ResponseEntity<String> post(@RequestBody Board postDto) {
        System.out.println(postDto.getBoardContent()+postDto.getUserCd()+postDto.getBoardTitle());
        try {
            Board board = boardService.post(postDto);
            if (board.getUserCd() == null) {    //유저아이디 정보가 없으면 실패
                
                return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            System.out.println("아이디 정보가 없습니다.");
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);

    }
    @GetMapping("/read/{boardCd}")
    @ApiOperation(value = "게시글 조회", notes = "작성된 게시글을 클릭하여 조회할 게시물 내용을 가져온다.", response = Board.class)
    public ResponseEntity<Optional<Board>> getBoardInfo(@PathVariable int boardCd) {
        System.out.println(boardService);
        
        Optional<Board> board = boardService.read(boardCd);
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
    
    @RequestMapping(value ="/", method=RequestMethod.PUT)
    @ApiOperation(value = "게시글 수정", notes = "게시글의 제목 내용 카테고리 수정 가능, 성공 200, 에러 or 실패시 204,500", response = Board.class)
    public ResponseEntity<String> updateBoard(@RequestBody Board board) throws IOException {
        try {
            boolean ret = boardService.updateBoard(board);
            if (!ret) {
                return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
            }
            System.out.println("게시물 수정 성공");
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("게시물 수정 에러");
            e.printStackTrace();
            return new ResponseEntity<String>(ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
   @RequestMapping(value="/{boardCd}", method = RequestMethod.DELETE)
   @ApiOperation(value="보드코드로 게시물 삭제", notes = "보드코드를 받아 게시물을 삭제한다.", response = String.class)
   @ApiImplicitParams({ @ApiImplicitParam(name = "boardCd", value = "삭제하고싶은 boardCd", required = true) })
   public ResponseEntity<String> deleteBoard(@PathVariable int boardCd) throws IOException{
       
       try {
           boolean ret = boardService.deleteBoard(boardCd);
           if(!ret) {
               return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
           }
           System.out.println("게시물 삭제 성공");
           return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
       } catch (Exception e) {
           e.printStackTrace();
           System.out.println("게시글 삭제 오류");
           return new ResponseEntity<String>(ERROR, HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }
   
   @GetMapping("/{broadCastCd}/{cateCd}")
   @ApiOperation(value = "게시글 리스트 조회", notes = "카테고리 선택시 해당 카테고리의 게시글 출력", response = Board.class)
   public ResponseEntity<List<Board>> getBoardlist(@PathVariable int cateCd, int broadcastCd) {
       System.out.println(boardService);
       
       List<Board> board = boardService.getboardlist(cateCd, broadcastCd);
       System.out.println(board);
       return ResponseEntity.ok(board);
   }
}

package com.americatv.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.americatv.entity.Board;
import com.americatv.entity.User;
import com.americatv.dao.BoardDAO;
import com.americatv.dao.UserDAO;

@Service

public class BoardService {
    @Autowired
    BoardDAO boardDAO;
    
    // INSERT INTO board VALUES (8, 12, 100, 1, '첫번째게시물 내용', now(), 0, 0, '첫번째 게시물 제목' );
    public Board post(Board b) {  //게시글 작성
        Board board = Board.builder()
                    .userCd(b.getUserCd())
                    .boardContent(b.getBoardContent())
                    .boardTitle(b.getBoardTitle())
                    .boardRecommend(0)
                    .boardView(0)
                    .broadcastCd(1)
                    .cateCd(b.getCateCd())
                    .boardDt(new Date())
                    .build();    // 제목 내용 유저아이디 가져옴
            
        return boardDAO.save(board);
    }
    
    
    public Optional<Board> read(int boardCd) {    //게시글 호출
        Optional<Board> board = boardDAO.findByBoardCd(boardCd);
        board.ifPresent(selectBoard -> {
            System.out.println
            (selectBoard.getUserCd()+"의 "+selectBoard.getBoardCd()+"번 글 호출");
            selectBoard.setBoardView((selectBoard.getBoardView()+1));   //조회수 + 1
            boardDAO.save(selectBoard);
        });    
        return board;
    }
    
    // 게시글 수정 -> signup방식으로 접근해야될거같은데 해당 컬럼 삭제하고 builder해서 넣는방법 물어봐야될듯
    public boolean updateBoard(Board board){
        
        Optional<Board> updateBoard = boardDAO.findByBoardCd(board.getBoardCd());
        
        // 데이터가 DB에 존재하는지 여부
        if(!updateBoard.isPresent()) {
            System.out.println("존재하지 않는 게시물을 호출하려함.");
            return false;
        }
        
        updateBoard.ifPresent(selectBoard -> {
            selectBoard.setBoardContent(board.getBoardContent());
            selectBoard.setBoardTitle(board.getBoardTitle());
            selectBoard.setCateCd(board.getCateCd());
            boardDAO.save(selectBoard);
        });
        return true;
        
    }

    // boardCd를 받아 해당 게시물 삭제
    public boolean deleteBoard(int boardCd) {
        Optional<Board> deleteBoard = boardDAO.findByBoardCd(boardCd);
        
        if(!deleteBoard.isPresent()) {
            System.out.println("이미 존재하지 않는 게시물을 삭제하려함.");
            return false;
        }
        
        boardDAO.deleteByBoardCd(boardCd);
            
        
        return true;
    }
    
    
    
//      public List<Board> listALL() throws Exception;  //게시글 전체 목록
//      public void increaseViewcnt(int bno, HttpSession session) throws Exception; //게시글 조회
    

}

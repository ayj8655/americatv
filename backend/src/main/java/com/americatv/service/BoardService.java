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
        board.ifPresent(seleteBoard -> {
            System.out.println(seleteBoard.getBoardCd()+"번 글 호출");
        });    
        return board;
    }
    
    // 게시글 수정 -> signup방식으로 접근해야될거같은데 해당 컬럼 삭제하고 builder해서 넣는방법 물어봐야될듯
    public boolean updateBoard(Board board, int userCd){
        
        if(board.getUserCd() != userCd)
            return false;        
        
        
        Optional<Board> updateBoard = boardDAO.findByBoardCd(board.getBoardCd());
        
        updateBoard.ifPresent(selectBoard -> {
            selectBoard.setBoardContent(board.getBoardContent());
            selectBoard.setBoardTitle(board.getBoardTitle());
            selectBoard.setCateCd(board.getCateCd());
            boardDAO.save(selectBoard);
        });
        return true;
        
    }
    
        
//      public BoardVO read(int bno) throws Exception;  //게시글 상세보기
//      public void update(Board b) throws Exception;   //게시글 수정
//      public void delete(Board b) throws Exception;   //게시글 삭제
//      public List<Board> listALL() throws Exception;  //게시글 전체 목록
//      public void increaseViewcnt(int bno, HttpSession session) throws Exception; //게시글 조회
    

}

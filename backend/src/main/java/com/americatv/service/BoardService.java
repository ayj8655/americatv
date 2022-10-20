package com.americatv.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.americatv.entity.Board;
import com.americatv.entity.User;
import com.americatv.dao.BoardDAO;

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
                    .userJoinDt(new Date())
                    .build();    // 제목 내용 유저아이디 가져옴
            
        return boardDAO.save(board);
    }
    
    public Optional<Board> findByBoardCd(int board_cd) {    //게시글 호출
        Optional<Board> board = boardDAO.findByBoardCd(board_cd);
        board.ifPresent(seleteBoard -> {
            System.out.println(seleteBoard.getBoardCd()+"번 글 호출");
        });    
        return board;
    }
    
    // 게시글 수정 -> signup방식으로 접근해야될거같은데 해당 컬럼 삭제하고 builder해서 넣는방법 물어봐야될듯
    /*public Optional<Board> EditContent(int board_cd){
        Optional<Board> board = boardDAO.findByBoardCd(board_cd);
        
        return board;
        
    }*/
        
//      public BoardVO read(int bno) throws Exception;  //게시글 상세보기
//      public void update(Board b) throws Exception;   //게시글 수정
//      public void delete(Board b) throws Exception;   //게시글 삭제
//      public List<Board> listALL() throws Exception;  //게시글 전체 목록
//      public void increaseViewcnt(int bno, HttpSession session) throws Exception; //게시글 조회
    

}

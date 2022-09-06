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
		
		// TODO Auto-generated method stub
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
			
//			User user = User.builder().userId(userEntity.getUserId()).userPw(userEntity.getUserPw()).userNick(userEntity.getUserNick())
//					.userNm(userEntity.getUserNm()).userBirth(userEntity.getUserBirth()).userEmail(userEntity.getUserEmail())
//					.userPhone(userEntity.getUserPhone()).userJoinDt(new Date())
//					.build();
//			
			
			return boardDAO.save(board);
		}
		
		
//		public BoardVO read(int bno) throws Exception;	//게시글 상세보기
//		public void update(Board b) throws Exception;	//게시글 수정
//		public void delete(Board b) throws Exception;	//게시글 삭제
//		public List<Board> listALL() throws Exception;	//게시글 전체 목록
//		public void increaseViewcnt(int bno, HttpSession session) throws Exception;	//게시글 조회
	

}

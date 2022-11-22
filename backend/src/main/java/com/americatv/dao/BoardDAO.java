package com.americatv.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;

import com.americatv.entity.Board;
import com.americatv.entity.BookMark;

public interface BoardDAO extends JpaRepository <Board, Integer>{
	
	public Optional<Board> findByBoardCd(int boardCd);
	
	@Transactional
	public void deleteByBoardCd(int boardCd);

	@Transactional
    public List<Board> findAllByCateCdAndBroadcastCd(int cateCd, int broadcastCd);
}

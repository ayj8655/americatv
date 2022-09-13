package com.americatv.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.americatv.entity.Board;
import com.americatv.entity.BookMark;

public interface BoardDAO extends JpaRepository <Board, Integer>{
	
	public Optional<BookMark> findByUserCd(int user_cd);
	
}

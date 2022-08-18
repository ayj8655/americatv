package com.americatv.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.americatv.entity.BookMark;


@Repository
public interface BookMarkDAO extends JpaRepository <BookMark, Integer>{

	public Optional<BookMark> findByUserCd(int user_cd);

}
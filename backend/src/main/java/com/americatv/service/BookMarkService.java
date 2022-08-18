package com.americatv.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.americatv.dao.BookMarkDAO;
import com.americatv.entity.BookMark;

@Service
public class BookMarkService {
	
	@Autowired
	BookMarkDAO bookMarkDAO;
	
	
	public Optional<BookMark> findByUserCd(int user_cd) {
		Optional<BookMark> bookmark = bookMarkDAO.findByUserCd(user_cd);
		
		bookmark.ifPresent(seleteBookMark -> {
			System.out.println(seleteBookMark.getUserCd());
		});
		
		return bookmark;
		
	}
	
	
	public BookMark bookmark(BookMark bookmarkEntity) {
		
		BookMark bookMark = BookMark.builder()
							.userCd(bookmarkEntity.getUserCd())
							.markUserNick(bookmarkEntity.getMarkUserNick()).build();
		
		return bookMarkDAO.save(bookMark);
	}
	

}
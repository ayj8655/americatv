package com.americatv.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.americatv.dao.BlackListDAO;
import com.americatv.entity.BlackList;

@Service
public class BlackListService {
	
	@Autowired
	BlackListDAO blackListDAO;
	
	
	public Optional<BlackList> findByUserCd(int user_cd) {
		Optional<BlackList> blacklist = blackListDAO.findByUserCd(user_cd);
		
		blacklist.ifPresent(seleteBlackList -> {
			System.out.println(seleteBlackList.getBlackDt());
		});
		
		return blacklist;
		
	}

}

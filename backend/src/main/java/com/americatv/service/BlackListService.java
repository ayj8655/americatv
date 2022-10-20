package com.americatv.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.americatv.dao.BlackListDAO;
import com.americatv.entity.BlackList;

import lombok.Builder;


@Service
public class BlackListService {
	
	@Autowired
	BlackListDAO blackListDAO;
	
	public Optional<BlackList> findByUserCd(int user_cd) {
		Optional<BlackList> blacklist = blackListDAO.findByUserCd(user_cd);
		
		blacklist.ifPresent(seleteBlackList -> {  //값이 있는지 없는지 판단한다.
			System.out.println(seleteBlackList.getBlackDt());
		});
		
		return blacklist;
		
	}

	public BlackList black_user(BlackList BlackEntity) {
		
		BlackList black_user = BlackList.builder()
				.userCd(BlackEntity.getUserCd())
				.blackDt(BlackEntity.getBlackDt())
				.blackUser(BlackEntity.getBlackUser())
				.build();
		
		return blackListDAO.save(black_user);
	}
	
}

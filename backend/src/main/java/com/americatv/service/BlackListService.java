package com.americatv.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.americatv.dao.BlackListDAO;
import com.americatv.entity.BlackList;

@Service
public class BlackListService {
	
	@Autowired
	BlackListDAO blackListDAO;
	

   public BlackList black_user(BlackList BlackEntity) {
        
        BlackList black_user = BlackList.builder()
                .userCd(BlackEntity.getUserCd())
                .blackDt(BlackEntity.getBlackDt())
                .blackUser(BlackEntity.getBlackUser())
                .build();
        
        return blackListDAO.save(black_user);
    }
		
	
	public Optional<BlackList> findByUserCd(int user_cd) {
		Optional<BlackList> blacklist = blackListDAO.findByUserCd(user_cd);
		
		blacklist.ifPresent(seleteBlackList -> {
			System.out.println(seleteBlackList.getBlackDt());
		});
		
		return blacklist;
		
	}
	
//	   public Optional<BlackList> insertByBlackUser(String black_user) {
//	        Optional<BlackList> blacklist = blackListDAO.insertByBlackUser(black_user);
//	        
//	        blacklist.ifPresent(seleteBlackList -> {
//	            System.out.println(seleteBlackList.getBlackDt());
//	        });
//	        
//	        return blacklist;
//	        
//	    }
	
	
	
	@Transactional(readOnly = true)
    public Optional<BlackList> getUblacklist(int user_cd) {
        return blackListDAO.findByUserCd(user_cd);
    }
	
//	public Optional<BlackList> postblacklist(String black_user){
//	    return blackListDAO.insertByBlackUser(black_user);
//	}
	
}

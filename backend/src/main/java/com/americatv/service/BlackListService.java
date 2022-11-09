package com.americatv.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.americatv.dao.BlackListDAO;
import com.americatv.entity.BlackList;

import lombok.Builder;


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
   
   @Transactional
   public BlackList insertblackuser(BlackList blackDto) {
         
       BlackList blackuser = BlackList.builder()
               .userCd(blackDto.getUserCd())
               .blackDt(new Date())
               .blackUser(blackDto.getBlackUser())
               .build();
       
       return blackListDAO.save(blackuser);
    
       
   }
   
	public Optional<BlackList> findByUserCd(int user_cd) {
		Optional<BlackList> blacklist = blackListDAO.findByUserCd(user_cd);
		
		blacklist.ifPresent(seleteBlackList -> {  //값이 있는지 없는지 판단한다.
			System.out.println(seleteBlackList.getBlackDt());
		});
		
		return blacklist;
		
	}
	
   public Optional<BlackList> save(String black_user) {
        Optional<BlackList> blacklist = blackListDAO.save(black_user);
        
        blacklist.ifPresent(seleteBlackList -> {  //값이 있는지 없는지 판단한다.
            System.out.println(seleteBlackList.getBlackDt());
        });
        
        return blacklist;
        
    }  
	
	
	@Transactional(readOnly = true)
    public Optional<BlackList> getUblacklist(int user_cd) {
        return blackListDAO.findByUserCd(user_cd);
    }
	
	
	
}

package com.americatv.dao;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.americatv.entity.BlackList;

public interface BlackListDAO extends JpaRepository <BlackList, Integer>{


	public Optional<BlackList> findByUserCd(int user_cd);

    public Optional<BlackList> save(String black_user);
	
    @Transactional
    public void deleteByBlackCd(Integer integer);
    
    public Optional<BlackList> findByUserCdAndBlackUser(int user_cd, String black_user);
	
	
}

package com.americatv.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.americatv.entity.BlackList;

public interface BlackListDAO extends JpaRepository <BlackList, Integer>{


	public Optional<BlackList> findByUserCd(int user_cd);
	
//	public Optional<BlackList> insertByBlackUser(String black_user);


}

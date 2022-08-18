package com.americatv.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.americatv.dao.UserDAO;
import com.americatv.entity.User;

@Service
public class UserService {
	
	@Autowired
	UserDAO userDAO;
	
	
	public Optional<User> findeByUserId(String id){
		
		Optional<User> user = userDAO.findByUserId(id);

		user.ifPresent(selectUser -> {
			System.out.println(selectUser.getUserNick());
		});

		return user;
		
	}
	
	
	public User signup(User userEntity) {
		
		User user = User.builder().userId(userEntity.getUserId()).userPw(userEntity.getUserPw()).userNick(userEntity.getUserNick())
				.userNm(userEntity.getUserNm()).userBirth(userEntity.getUserBirth()).userEmail(userEntity.getUserEmail())
				.userPhone(userEntity.getUserPhone()).userJoinDt(new Date())
				.build();
		
		return userDAO.save(user);
		
	}
	
	

}

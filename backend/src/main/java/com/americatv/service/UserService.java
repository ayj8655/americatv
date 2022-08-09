package com.americatv.service;

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
	

}

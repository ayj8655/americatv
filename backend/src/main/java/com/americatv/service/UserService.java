package com.americatv.service;

import java.util.Date;
import java.util.Optional;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;


import com.americatv.dao.UserDAO;
import com.americatv.entity.Authority;
import com.americatv.entity.User;
import com.americatv.util.SecurityUtil;

@Service
public class UserService {
	
	
	@Autowired
	UserDAO userDAO;
	
	@Autowired
	private final PasswordEncoder passwordEncoder;
	
	public UserService(PasswordEncoder passwordEncoder) {
		this.passwordEncoder = passwordEncoder;
	}
	
	public Optional<User> findeByUserId(String id){
		
		Optional<User> user = userDAO.findByUserId(id);

		user.ifPresent(selectUser -> {
			System.out.println(selectUser.getUserNick());
		});

		return user;
		
	}
	

	@Transactional
    public User signup(User userDto) {
        if (userDAO.findOneWithAuthoritiesByUserId(userDto.getUserId()).orElse(null) != null) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }

        Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();

        User user = User.builder().userId(userDto.getUserId()).userPw(passwordEncoder.encode(userDto.getUserPw())).userNick(userDto.getUserNick())
				.userNm(userDto.getUserNm()).userBirth(userDto.getUserBirth()).userEmail(userDto.getUserEmail())
				.userPhone(userDto.getUserPhone()).userJoinDt(new Date())
				.authorities(Collections.singleton(authority))
                .build();

        return userDAO.save(user);
    }

    @Transactional(readOnly = true)
    public Optional<User> getUserWithAuthorities(String username) {
        return userDAO.findOneWithAuthoritiesByUserId(username);
    }

    @Transactional(readOnly = true)
    public Optional<User> getMyUserWithAuthorities() {
        return SecurityUtil.getCurrentUsername().flatMap(userDAO::findOneWithAuthoritiesByUserId);
    }
	


}

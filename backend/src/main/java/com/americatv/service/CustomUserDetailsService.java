package com.americatv.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.americatv.dao.UserDAO;
import com.americatv.entity.User;

import java.util.List;
import java.util.stream.Collectors;

@Component("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
   private final UserDAO userDao;

   public CustomUserDetailsService(UserDAO userDao) {
      this.userDao = userDao;
   }

   @Override
   @Transactional
   public UserDetails loadUserByUsername(final String userId) {
      return userDao.findOneWithAuthoritiesByUserId(userId)
         .map(user -> createUser(userId, user))
         .orElseThrow(() -> new UsernameNotFoundException(userId + " -> 데이터베이스에서 찾을 수 없습니다."));
   }

   private org.springframework.security.core.userdetails.User createUser(String userId, User user) {
//      if (!user.isActivated()) {
//         throw new RuntimeException(username + " -> 활성화되어 있지 않습니다.");
//      }

      List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
              .map(authority -> new SimpleGrantedAuthority(authority.getAuthorityName()))
              .collect(Collectors.toList());

      return new org.springframework.security.core.userdetails.User(user.getUserId(),
              user.getUserPw(),
              grantedAuthorities);
   }
}
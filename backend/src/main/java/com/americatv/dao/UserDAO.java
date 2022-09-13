package com.americatv.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.EntityGraph;
import com.americatv.entity.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {
	
	@EntityGraph(attributePaths = "authorities")
	Optional<User> findOneWithAuthoritiesByUserId(String userId);
	
	public Optional<User> findByUserId(String id);

	Optional<User> findByUserPhone(String phone);
	
	Optional<User> findByUserEmail(String email);
	
	
	
}

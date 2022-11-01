package com.americatv.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.EntityGraph;

import com.americatv.entity.Broadcast;
import com.americatv.entity.User;

@Repository
public interface BroadcastDAO extends JpaRepository<Broadcast, Integer> {
	
	public Optional<Broadcast> findByUserCd(Integer userCd);	
	
	
}

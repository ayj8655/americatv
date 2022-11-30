package com.americatv.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.americatv.entity.Ripple;

import java.util.List;
import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;



public interface RippleDAO extends JpaRepository <Ripple, Integer>{

    
    public List<Ripple> findAllByBoardCd(int boardCd);

    Optional<Ripple> findByRippleCd(Integer rippleCd);

    @Transactional
    public void deleteByRippleCd(int rippleCd);

    
}

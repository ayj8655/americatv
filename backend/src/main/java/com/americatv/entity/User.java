package com.americatv.entity;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED) 
@Entity(name="user")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 이건 오토인크리먼트일때만 넣어주는거
	@Column(name = "USER_CD")
	private Integer userCd;
	
	@Column(name = "USER_ID")
	private String userId;
	
	private String USER_PW;
	
	private String USER_NICK;
	
	private String USER_NM;
	
	private Date USER_BIRTH;
	
	private String USER_EMAIL;
	
	private String USER_PHONE;
	
	@Temporal(TemporalType.TIMESTAMP) // 이거 써야 자동으로 시간 넣어줌
	private Date USER_JOIN_DT;
	
	private Date USER_LAST_DT;
	
	
	
	
}

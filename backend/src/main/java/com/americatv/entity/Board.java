package com.americatv.entity;

import java.util.Date;

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
/*
 * @ToString
 * 
 * @EqualsAndHashCode
 * 
 * @Getter : 모든 필드
 * 
 * @Setter : 정적 필드가 아닌 모든 필드
 * 
 * @RequiredArgsConstructor
 */
@Builder
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 만듦
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 파라미터가 없는 기본 생성자를 생성
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class) // 양방향 관계 엔티티 사이클 방지
@Entity(name = "board")
public class Board {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 이건 오토인크리먼트일때만 넣어주는거
	@Column(name = "BOARD_CD")
	private Integer boardCd;

	@Column(name = "USER_CD")
	private Integer userCd;
	
	@Column(name = "CATE_CD")
	private Integer cateCd;
	
	@Column(name = "BROADCAST_CD")
	private Integer broadcastCd;
	
	@Column(name = "BOARD_CONTENT")
	private String boardContent;

	@Column(name = "BOARD_DT")
	@Temporal(TemporalType.TIMESTAMP) // 이거 써야 자동으로 시간 넣어줌
	private Date userJoinDt;

	@Column(name = "BOARD_RECOMMEND")
	private Integer boardRecommend;
	
	@Column(name = "BOARD_VIEW")
	private Integer boardView;
	
	@Column(name = "BOARD_TITLE")
	private String boardTitle;
	

}

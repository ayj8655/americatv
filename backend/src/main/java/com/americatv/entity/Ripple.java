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
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class) // 양방향 관계 엔티티 사이클 방지
@Entity(name = "ripple")
public class Ripple {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 이건 오토인크리먼트일때만 넣어주는거
    @Column(name = "RIPPLE_CD")
    private Integer rippleCd;

    @Column(name = "USER_CD")
    private Integer userCd;
    
    @Column(name = "BOARD_CD")
    private Integer boardCd;
    
    @Column(name = "RIPPLE_CONTENT")
    private String rippleContent;
    
    @Column(name = "RIPPLE_DT")
    @Temporal(TemporalType.TIMESTAMP) // 이거 써야 자동으로 시간 넣어줌
    private Date rippleDt;

    @Column(name = "RIPPLE_RECOMMEND")
    private Integer rippleRecommend;
    
}
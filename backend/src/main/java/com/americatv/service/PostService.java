//package com.americatv.service;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.americatv.dto.PostResponseDTO;
//import com.americatv.entity.Board;
//import com.americatv.entity.User;
//
//import javax.annotation.PostConstruct;
//
///**
// * created by Gyunny 2021/11/07
// */
//@Transactional(readOnly = true)
//@RequiredArgsConstructor
//@Service
//public class PostService {
//
//    private final Board board;
//    private final User user;
//
//    @PostConstruct
//    public void init(User u) {
//        User user = user.save(User.builder()
//                .userCd(u.getUserCd())
//                .build());
//        for (int i = 1; i <= 25; ++i) {
//            board.save(Board.builder()
//                    .title("제목" + i)
//                    .content("내용" + i)
//                    .user(user).build());
//        }
//    }
//
//    public Page<PostResponseDTO> findAll(Pageable pageable) {
//        return board.findByUserOrderByIdDesc(createUser(), pageable)
//                .map(PostResponseDTO::from);
//    }
//
//}
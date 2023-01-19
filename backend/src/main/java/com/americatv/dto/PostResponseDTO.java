package com.americatv.dto;

import com.americatv.entity.Board;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class PostResponseDTO {
    private final Integer userCd;
    private final String boardTitle;
    private final String boardContent;
    
    public static PostResponseDTO from (Board board) {
        return PostResponseDTO.builder()
                .userCd(board.getUserCd())
                .boardTitle(board.getBoardTitle())
                .boardContent(board.getBoardTitle())
                .build();

        
    }

}

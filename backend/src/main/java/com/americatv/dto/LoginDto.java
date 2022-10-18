package com.americatv.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import io.swagger.annotations.ApiModelProperty;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {

   @NotNull
   @Size(min = 3, max = 50)
   @ApiModelProperty(example = "jsm")
   private String userId;

   @NotNull
   @Size(min = 3, max = 100)
   @ApiModelProperty(example = "1234")
   private String userPw;
}
import Slider from "react-slick";
import React from "react";
import styled from "styled-components";
import ex2 from '../images/example2.jpg';
import ex3 from '../images/example3.jpg';
import ex4 from '../images/example4.jpg';
import ex5 from '../images/example5.jpg';
import ex6 from '../images/example6.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SimpleSlider({}){
    const sliders = [1, 2, 3,4,5,6]
    return(
        <Container>
      <StyledSlider {...settings}>
        <CardImg src={ex2} alt="react"></CardImg>
        <CardImg src={ex3} alt="react"></CardImg>
        <CardImg src={ex4} alt="react"></CardImg>
        <CardImg src={ex5} alt="react"></CardImg>
        <CardImg src={ex6} alt="react"></CardImg>
      </StyledSlider>
    </Container>
    )
}

export default SimpleSlider;

// 슬라이드 설정
const settings = {
    dots: false,  // 슬라이드 밑에 점 보이게
    infinite: true,  // 무한으로 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,  // 넘어가는 속도
    slidesToShow: 4,  // 4장씩 보이게
    slidesToScroll: 1,  // 1장씩 뒤로 넘어가게
    centerMode: true,
    centerPadding: '0px',  // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };
  
  const Container = styled.div`
    margin-right: 25px;
  `;
  
  // 슬라이드 CSS
  const StyledSlider = styled(Slider)`
    .slick-list {
      width: 1600px;
      margin: 0 auto;
    }
  
    .slick-slide div {
      /* cursor: pointer; */
    }
  
    .slick-dots {
      bottom: -50px;
      margin-top: 200px;
    }
  
    .slick-track {
      /* overflow-x: hidden; */
    }
  `;
  
  const CardImg = styled.img`
    width: 380px;
    height: 190px;
    cursor: pointer;
  `;
  
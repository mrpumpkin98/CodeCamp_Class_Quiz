import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 200px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Box = styled.div``;

const H1 = styled.img`
  height: 150px;
  width: 300px;
  margin: Auto;
`;

export default function LayoutBanner(): JSX.Element {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <Box>
          <H1 src="imgs/1.jpeg"></H1>
        </Box>
        <Box>
          <H1 src="imgs/2.jpg"></H1>
        </Box>
        <Box>
          <H1 src="imgs/3.jpg"></H1>
        </Box>
      </Slider>
    </Wrapper>
  );
}

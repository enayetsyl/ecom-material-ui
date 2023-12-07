import { Box, Container, Typography, useMediaQuery } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import {  Autoplay, EffectCards } from 'swiper/modules';
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const Review = () => {
// HEADING TYPOGRAPHY VARIANT
const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.down('xs'));
 const sm = useMediaQuery(theme.breakpoints.down('sm'));
 const md = useMediaQuery(theme.breakpoints.down('md'));
 const lg = useMediaQuery(theme.breakpoints.down('lg'));
 
 const variant =
  xs ? 'h4' :
  sm ? 'h4' :
  md ? 'h3' :
  lg ? 'h2' :
  'h2';

    // SWIPER AUTOPLAY CONTROL ON MOUSE HOVER
    const [swiper, setSwiper] = useState(null);
    const handleMouseEnter = () => {
      if (swiper) {
        swiper.autoplay.stop();
      }
    };
    const handleMouseLeave = () => {
      if (swiper) {
        swiper.autoplay.start();
      }
    };

    // SWIPER FORWARD AND NEXT CLICK MOVEMENT CONTROL
  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  //  ICON BOLD STYLE
  const boldIconStyle = {
    fontWeight: "bold",
  };

  return (
    <Container 
    maxWidth="xl"
    >
       <Box className="mt-20 min-h-screen">
      {/* box for typography */}
      <Box>
        <Typography variant={variant} align="center" 
        className={`font-black capitalize`}
        >
          our satisfied customer say
        </Typography>
      </Box>
      {/* box for left and right icon */}
      <Box display="flex" justifyContent="center" py={5} gap={2} fontSize={50}>
        <ArrowBackIcon
          fontSize="inherit"
          style={boldIconStyle}
          onClick={handlePrevClick}
        />
        <ArrowForwardIcon
          fontSize="inherit"
          style={boldIconStyle}
          onClick={handleNextClick}
        />
      </Box>
      <Box 
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{ overflow: "hidden",
        }}
      >
        <Swiper
          effect={'cards'}
          grabCursor={true}
          rewind={false}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[ Autoplay, EffectCards]}
          className="mySwiper"
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          <SwiperSlide>
            <ReviewCard/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard/>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard/>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
    </Container>
  );
};

export default Review;
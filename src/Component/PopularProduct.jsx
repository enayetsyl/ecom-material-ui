import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  
} from "swiper/modules";
// import Swiper styles
import "swiper/css";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const PopularProduct = () => {
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

  //  ICON BOLD STYLE
  const boldIconStyle = {
    fontWeight: "bold",
  };

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

  return (
    <Container 
    maxWidth="xl"
    >
      <Box className="my-20 min-h-screen">
      {/* box for typography */}
      <Box>
        <Typography variant="h6" align="center" className="pb-3">
          Popular Products
        </Typography>
        <Typography variant={variant} align="center" className="font-black">
          Trending Now
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
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          rewind={false}
          breakpoints={{
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
    </Container>
  );
};

export default PopularProduct;

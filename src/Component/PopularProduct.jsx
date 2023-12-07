import { Box, Container, Typography } from "@mui/material";
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

const PopularProduct = () => {
  // HEADING TYPOGRAPHY VARIANT
  const screen = window.innerWidth;

  let heading;
  if (screen > 1024) {
    heading = "h1";
  } else if (screen <= 1024 && screen > 768) {
    heading = "h2";
  } else if (screen <= 768 && screen > 425) {
    heading = "h2";
  } else {
    heading = "h3";
  }

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
      <Box className="mt-20 min-h-screen">
      {/* box for typography */}
      <Box>
        <Typography variant="h6" align="center" className="pb-3">
          Popular Products
        </Typography>
        <Typography variant={heading} align="center" className="font-black">
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

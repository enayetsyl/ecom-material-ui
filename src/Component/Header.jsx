import { useState } from 'react';
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import { useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = () => {
  // IMAGE SLIDER
  const images = [hero1, hero2, hero3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  // HEADING TYPOGRAPHY VARIANT
  const screen = window.innerWidth;

  let heading;
  if(screen > 1024){
    heading = 'h1'
  }
  else if(screen <= 1024 && screen > 768){
    heading = 'h2';
  } else if (screen <= 768 && screen > 425){
    heading = 'h3'
  } else {
    heading = 'h3'
  }


  return (
    <Container
    maxWidth="xl"
    disableGutters
    >
      <Box 
    mt={10}
    py={5}
      className="px-5 md:h-[95vh] lg:h-[90vh]   flex flex-col-reverse md:flex-row justify-center items-center gap-2"
        >
      {/* TEXT DIV */}
      <Box className="md:w-1/2 lg:w-3/5 space-y-8 md:space-y-4 py-12">
        <Typography 
        variant={heading}
        className="text-4xl md:text-5xl lg:text-7xl font-bold capitalize ">new style unique design</Typography>
        <p className=" md:text-base lg:text-xl pb-5 lg:pb-2 xl:pb-5">In our shop you get unique designs that you will not get anywhere else. Our experienced designer wil give you world class cloth. Our delivery team will make sure you receive your product in a very short time. </p>
        <Link to='/shop'>
        <Button 
        color='primary'
        variant='outlined'
        size='large'
        className="">Shop Now</Button>
        </Link>
        <Box className='flex gap-2 lg:gap-5 '>
          <img src={hero1} alt="" className='w-[120px] md:w-[100px] lg:h-[120px] rounded-xl lg:w-[150px] xl:h-[180px] shadow-xl'/>
          <img src={hero2} alt="" className=' rounded-xl w-[120px] md:w-[100px] lg:h-[120px] lg:w-[150px] xl:h-[180px] shadow-2xl'/>
          <img src={hero3} alt="" className='rounded-xl w-[120px] md:w-[100px] lg:h-[120px] lg:w-[150px] xl:h-[180px] shadow-xl'/>
        </Box>
      </Box>
      {/* IMAGE DIV */}
      <Box 
      py={2}
      className="md:w-1/2 lg:w-2/5">
      <img src={images[currentImageIndex]} alt="" className='rounded-2xl object-cover md:h-[90vh] lg:h-[85vh] w-full'/>
      </Box>
    </Box>
    </Container>
  );
};

export default Header;
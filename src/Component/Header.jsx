import { useState } from 'react';
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import { useEffect } from 'react';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';


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


  
  return (
    <Container
    maxWidth="xl"
    disableGutters
    >
      <Box 
    mt={10}
      className="px-5  md:h-[95vh] lg:h-[90vh] lg:pt-10  flex flex-col-reverse md:flex-row justify-center items-center gap-2"
        >
      {/* TEXT DIV */}
      <Box className="md:w-1/2 lg:w-3/5 space-y-8 md:space-y-4 py-12">
        <Typography 
        variant={variant}
        className="font-bold capitalize"
        >new style unique design</Typography>
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
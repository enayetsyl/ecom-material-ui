import { Box, Container, Divider, IconButton, Typography, useMediaQuery } from "@mui/material";
import logo from '../assets/logo.webp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useTheme } from "@emotion/react";

const Footer = () => {
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
  return (
  <Box
  className='bg-slate-100 pt-2 
  mt-20
  drop-shadow-2xl md:max-h-[50vh]'
  >
    <Container 
    maxWidth='xl'
    >
    <Box 
    className='flex flex-col md:flex-row justify-around items-center gap-10'
    >
    <Box
    className='md:w-1/2 flex flex-col items-center '
    >
      <img src={logo} alt="" />
      <Typography
      variant="h5"
      >Connect with us</Typography>
      <IconButton
       size="large"

      >
        <FacebookOutlinedIcon
        style={{
          fontSize: '50px',
          color: 'black'
        }}
        />
      </IconButton>
    </Box>
    {/* call us  */}
    <Box className='md:w-1/2'>
      <Typography 
      variant='h3'
      align="center"
      >
        Hotline - 01730 19 76 20
      </Typography>
    </Box>
    </Box>
    <Divider variant="middle" 
    light={false}
    sx={{
      height: 4,
      borderWidth: 2,
    }}
    />
    <Box>
    <Typography
    variant="body1"
    align="center"
    py={1}
    >
      @ 2024. Md Enayetur Rahman
    </Typography>

    </Box>
  </Container>
  </Box>
  );
};

export default Footer;
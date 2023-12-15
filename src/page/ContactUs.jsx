import { useTheme } from "@emotion/react";
import { Button, CardMedia, Container, ImageList, ImageListItem, Paper, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import contactImage from '../assets/hero1.webp'
import TextField from '@mui/material/TextField';

const ContactUs = () => {
  // TYPOGRAPHY VARIANT RESPONSIVENESS
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

  // image list function
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  // image array
  const itemData = [
    {
      img: 'https://i.ibb.co/vB8cRpT/2.webp',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/FzqF8Xt/1.webp',
      title: 'Burger',
    },
    {
      img: 'https://i.ibb.co/VDZFxBB/18.webp',
      title: 'Camera',
    },
    {
      img: 'https://i.ibb.co/r7k1t5h/8.webp',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/Bs91PwH/16.webp',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/TL4XRML/4.webp',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/KKmLjbQ/banner3.webp',
    },
    {
      img: 'https://i.ibb.co/xq5cGpF/9.webp',
      title: 'Fern',
    },
    {
      img: 'https://i.ibb.co/nrZWqb5/5.webp',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://i.ibb.co/mTWRtCq/1.webp',
      title: 'Tomato basil',
    },
    {
      img: 'https://i.ibb.co/dLpMmZt/23.webp',
      title: 'Sea star',
    },
    {
      img: 'https://i.ibb.co/VQ8Lk3v/1.webp',
      title: 'Bike',
      cols: 2,
    },
  ];

  return (
    <Container maxWidth='xl'>
      {/* heading */}
       <Typography
        variant={variant}
        align="center"
        mb={5}
        mt={12}
        >
         Contact With Us
        </Typography>

        {/* flex container */}
        <Box 
        gap={2}
         my={5}
        className='flex flex-col lg:flex-row justify-center items-center '
        >
          {/* image div */}
          <Box className="w-full lg:w-1/2 rounded-lg ">
          {/* <CardMedia
                component="img"
                image={contactImage
                }
                alt="Contact image"
              className="max-h-[400px] rounded-lg"
              /> */}
              <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
          </Box>
          {/* form div */}
           <Box className="w-full lg:w-1/2">
           <Paper elevation={5} 
            className="p-4"
            >
                <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        display:'flex',
        flexDirection:'column',
        justifyItems:'center',
        alignItems:"center",
             }}
      noValidate
      autoComplete="off"
      >
            {/* name text field */}
            <TextField
          required
          id="outlined-required"
          label="Your Name"
          type="text"
          placeholder="Md Enayetur Rahman"
          sx={{ width: '100%' }}
        />
        {/* number text field */}
            <TextField
          required
          id="outlined-required"
          label="Your Mobile"
          type="text"
          placeholder="01730 19 76 20"
          sx={{ width: '100%' }}
        />
        {/* email text field */}
            <TextField
          required
          id="outlined-required"
          label="Your Email"
          type="email"
          placeholder="enayetflweb@gmail.com"
          sx={{ width: '100%' }}
        />
        {/* message */}
        <TextField
          id="outlined-multiline-static"
          label="Your Message"
          multiline
          rows={3}
          placeholder="Type your message here"
          sx={{ width: '100%' }}
        />
                </Box>
                <Box display='flex'
                justifyContent='center'
                >
                <Button variant="contained" fullWidth>Send Message</Button>
                </Box>
            </Paper>
           </Box>
        </Box>
    </Container>
  );
};

export default ContactUs;
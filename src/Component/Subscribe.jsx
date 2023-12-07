import {
  Box,
  Button,
  CardMedia,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import image from "../assets/hero3.webp";
import { useState } from "react";
import { useTheme } from "@emotion/react";

const Subscribe = () => {
  const [phoneNumber, setPhoneNumber] = useState(null)

  const handleSubscribe = () => {
    console.log(phoneNumber)
  }

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
   my={40}
   >
     <Container maxWidth="xl"  >
    <Box
      height="90vh"
      gap={5}
      className="flex flex-col-reverse md:flex-row gap-5 justify-center items-center my-20"
    >
      {/* IMAGE DIV */}
      <Box className="md:w-1/2">
        <img src={image} alt="subscribe"
        className="rounded-xl max-h-[80vh]"
        />
      </Box>
      {/* FORM DIV */}
      <Box className="md:w-1/2 space-y-5">
        <Typography variant={variant} align="center">
          Let's keep in Touch
        </Typography>
        <Typography variant="body1" align="center">
          Subscribe with your phone number to get the latest news and sales
          about our products.
        </Typography>
        <TextField id="standard-basic" label="Your Mobile Number" variant="standard" 
        fullWidth
        type="number"
        inputProps={{minLength: 11, maxLength: 11}}
        placeholder="017*********"
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button
        variant="outlined"
        onClick={handleSubscribe}
        >
          Subscribe Now
        </Button>
      </Box>
    </Box>
  </Container>
   </Box>
  );
};

export default Subscribe;

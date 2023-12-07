import {
  Box,
  Button,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import image from "../assets/hero3.webp";
import { useState } from "react";

const Subscribe = () => {
  const [phoneNumber, setPhoneNumber] = useState(null)

  const handleSubscribe = () => {
    console.log(phoneNumber)
  }


  return (
    <Container maxWidth="xl">
      <Box
        my={20}
        height="90vh"
        gap={5}
        className="flex flex-col md:flex-row gap-5 justify-center items-center"
      >
        {/* IMAGE DIV */}
        <Box className="md:w-1/2">
          <CardMedia
            component="img"
            alt="subscribe"
            image={image}
            className="rounded-xl max-h-[80vh]"
          />
        </Box>
        {/* FORM DIV */}
        <Box className="md:w-1/2 space-y-5">
          <Typography variant="h3" align="center">
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
  );
};

export default Subscribe;

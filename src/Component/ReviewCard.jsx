import { Box, Card, Typography } from "@mui/material";
import user2 from '../assets/user2.webp'

const ReviewCard = () => {
  

  return (
  <Box
className='bg-slate-200 space-y-5 px-4 py-10 md:px-10 md:w-[60%] lg:w-[50%] xl:w-[40%] rounded-3xl'
  >
      <Card
      className="shadow-2xl p-4 text-center"
      >
      <Typography
      variant="h5"
      >Very good and nice product. I like it. Seller is a good person.</Typography>
    </Card>
    <Box 
    className='flex justify-center items-center gap-4'
    >
      <img src={user2} alt=""
      className="rounded-full h-20 w-20 border-2 border-solid border-red-500"
      />
            <Box>
            <Typography
      variant="h6"
      >Mui mui</Typography>
            <Typography
      variant="body1"
      >Customer</Typography>
            </Box>
    </Box>
  </Box>
  );
};

export default ReviewCard;
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import product1 from "../assets/product1.webp";
import { Box, IconButton } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product1}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          style={{ fontWeight: "bold" }}
        >
          Casual Panjabi
        </Typography>
    <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    >
    <IconButton>
          <AttachMoneyIcon
            sx={{
              color: "black",
            }}
            style={{
              color: '#DC2626',
              opacity: '0.5',
              fontSize:"26px",
              textDecoration: 'line-through',
            }}
          />
        </IconButton>
        <Typography 
        ml={-2}
        variant="h5" align="center"
        style={{
          color: '#DC2626',
          opacity: '0.5',
          textDecoration: 'line-through',
        }}
        
        >
          2999
        </Typography>
    <IconButton>
          <AttachMoneyIcon
            sx={{
              color: "black",
            }}
            style={{fontSize: '50px',
            color: "#f5c000",
            }}
/>
        </IconButton>
        <Typography 
        ml={-2}
        variant="h3" align="center" 
        style={{
          color: "#f5c000",
          fontWeight: 'bold',
        }}
        >
          999
        </Typography>
    </Box>
      </CardContent>
      <CardActions
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <Button size="large"
        variant="contained"
        >Select</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

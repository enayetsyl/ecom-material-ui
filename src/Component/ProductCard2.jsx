import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Link, useParams } from "react-router-dom";

const ProductCard2 = ({p}) => {
  const { id } = useParams();
  
  // console.log(p)
  return (
    <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={p.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          style={{ fontWeight: "bold" }}
        >
          {p.productTitle}
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
        variant="h6" align="center"
        style={{
          color: '#DC2626',
          opacity: '0.5',
          textDecoration: 'line-through',
        }}
        
        >
          {p.regularPrice}
        </Typography>
    <IconButton>
          <AttachMoneyIcon
            sx={{
              color: "black",
            }}
            style={{fontSize: '40px',
            color: "#f5c000",
            }}
/>
        </IconButton>
        <Typography 
        ml={-2}
        variant="h4" align="center" 
        style={{
          color: "#f5c000",
          fontWeight: 'bold',
        }}
        >
            {p.currentPrice}
        </Typography>
    </Box>
      </CardContent>
      <CardActions
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <Link to={`/singleProduct/${p._id}`}>
        <Button size="large"
        variant="contained"
        >Select</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard2;

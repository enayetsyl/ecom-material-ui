import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Paper, TextField } from '@mui/material';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { data } from "browserslist";


const SingleProduct = () => {
  const { id } = useParams()
  const [color, setColor] = React.useState('');
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [image, setImage] = React.useState('')
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
 
  const { data: product, isLoading, isError } = useQuery({
    queryKey:['singleProduct', id],
    queryFn: async () => {
      const result = await fetch(`http://localhost:5000/api/v1/allproducts/${id}`)
      const data = await result.json()
      setImage(data.featured_image)
      return data;
    }
  })
  console.log(product)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching product</div>;
  }

  return (
    <Container maxWidth='xl' >
        <Paper elevation={5}  square={false}>
      <Card sx={{ display:'flex', gap: '5px', justifyContent: 'center', alignContent: 'center', mt:'100px', height:'370px'
    }}>
        {/* left div */}
        <CardMedia
          component="img"
         image={image}
          sx={{width:'50%', height:'full', objectFit:'contain',
          ':hover': {
            transform: 'scale(1.2)',
            transition: 'transform 3s ease-in-out',
          },
        }}
        />
        {/* right div */}
       <Box
       sx={{width:'50%'}}
       >
       <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {product.title}
          </Typography>
          <Box
           display={"flex"}
          justifyItems={'start'}
          alignItems={'center'}
          gap={1}
          >
          <Typography variant="body2" color="red" sx={{textDecoration: 'line-Through'}}>
            ${product.rprice}
          </Typography>
          <Typography variant="h6" fontWeight={'bold'}>
            ${product.sprice}
          </Typography>
          </Box>
          {/* select portion */}
         <Paper elevation={5} sx={{padding: '10px', display: 'flex', flexDirection: 'column', gap:'10px'}}>
         <FormControl fullWidth>
        <InputLabel id="color-label">Color</InputLabel>
        <Select
          labelId="color-label"
          id="demo-simple-select"
          value={color}
          label="Color"
          onChange={handleColorChange}
        >
          {
            product.color.map((color, idx) =>(
              <MenuItem
              key={idx}
              value={color}>{color}</MenuItem>
            ))
          }
          
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="size-label">Size</InputLabel>
        <Select
          labelId="size-label"
          id="size"
          value={size}
          label="Size"
          onChange={handleSizeChange}
        >
          {
            product.size.map((size, idx) => (
              <MenuItem 
              key={idx}
              value={size}>{size}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="Quantity" variant="outlined" 
      onChange={(e) => setQuantity(e.target.value)}
      />
         </Paper>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{padding:'15px'}}>
        <Button size="small" color="primary" fullWidth variant="contained">
          Add to Cart
        </Button>
      </CardActions>
       </Box>
    </Card>
    </Paper>
    <Paper elevation={10} sx={{
      display:'flex', gap: '10px',  my:'10px',
      p:'10px'
    }}>
    <CardMedia
          component="img"
         image={product.featured_image}
         sx={{height:'100px', width: '100px',borderRadius:'10px',
         ':hover': {
          transform: 'scale(1.5)',
          transition: 'transform 3s ease-in-out',
        },
        }}
         onClick={()=> setImage(product.featured_image)}
        />
    <CardMedia
          component="img"
         image={product.gallery_image}
         sx={{height:'100px', width: '100px',borderRadius:'10px',
         ':hover': {
          transform: 'scale(1.5)',
          transition: 'transform 3s ease-in-out',
        },
      }}
         onClick={()=> setImage(product.gallery_image)}
        />
        <Box>
        <Typography variant="h6">Product Details: </Typography>
      <Typography variant="body1">{product.desc}</Typography>
        </Box>
    </Paper>
      </Container>
  );
};

export default SingleProduct;

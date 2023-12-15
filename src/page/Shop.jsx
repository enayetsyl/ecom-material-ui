
import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography, useMediaQuery, Button, CardActionArea, CardActions } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useInfiniteQuery } from "@tanstack/react-query"
import InfiniteScroll from "react-infinite-scroll-component"

const getCards = async ({pageParam = 0}) => {
  const res = await fetch(`http://localhost:5000/api/v1/allproducts?limit=9&offset=${pageParam}`)
  const data = await res.json()
  return { ...data, prevOffset: pageParam}
}

const Shop = () => {
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

  const {data, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: ['card'],
    queryFn: getCards,
    getNextPageParam: (lastPage) => {
      if(lastPage.prevOffset + 9 > lastPage.productCount) {
        return false;
      }
      return lastPage.prevOffset + 1
    }
  })

    const products = data?.pages.reduce((acc,page) => {
      return [...acc, ...page.products]
    },[])


  return (
    <Container maxWidth='xl'>
      <Box mt={15} >
        <Typography
        variant={variant}
        align="center"
        mb={5}
        >
          Our Shop
        </Typography>

       <InfiniteScroll
       dataLength={products ? products.length : 0}
       next={() => fetchNextPage()}
       hasMore={hasNextPage}
       loader={<h1 className="text-5xl">Loading...........</h1>}
       endMessage={<p className="text-3xl font-bold">This is the end</p>}
       >
       <Grid container m={1} spacing={1} gap={1}
         >
    {
          products && products.map((product, index) => (
           
              <Card sx={{ maxWidth: 345 }}
              key={index}
              >
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={product.image}
                alt="Product image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {product.productTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
      
          //  <div key={index}
          //  className="border border-solid border-red-500 space-y-6 flex flex-col justify-center items-center p-5"
          //  >
          //    <img src={product.image} alt="" />
          //    <h1>{product.productTitle }</h1>
          //   <p>{product.regularPrice}</p>
          //  </div>
          ))
        }
     
      </Grid>
       </InfiniteScroll>
    
      </Box>
    </Container>
  );
};

export default Shop;



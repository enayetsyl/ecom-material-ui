
import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ProductCard2 from "../Component/ProductCard2";

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

  // DATA FETCHING
    const [productData, setProductData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
  
    const getProductData = async (page) => {
      const url = `http://localhost:5000/api/v1/allproducts?_limit=9&_page=${page}`;
      try {
        const res = await fetch(url);
    
        const data = await res.json();
        setProductData((prev) => [...prev, ...data]);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
  
    const handleInfiniteScroll = async () => {
      try{
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
          setLoading(true)
          setPage((prev) => prev + 1)
        }
      } catch(error){
        console.log(error)
      }
    }
  
    useEffect(() => {
      getProductData(page)
    },[page])
  
    useEffect(() => {
      window.addEventListener('scroll', handleInfiniteScroll)
      return() => window.removeEventListener('scroll', handleInfiniteScroll)
    },[])
 
  // console.log(product)

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

        <Grid container spacing={3}
         >
          <h1 className="fixed text-2xl text-red-500">Number of product: {productData.length}</h1>
      {/* Item 1 */}
      {
        productData?.map((p, idx) => (
          <Grid 
          key={idx}
          item xs={12} sm={6} md={4} lg={4}>
               <ProductCard2 p={p}/>
      </Grid>
        ))
      }
      </Grid>
     {loading && <p>Loading......</p>}
     {/* {error && <p>Error: {error.message}</p>} */}
      </Box>
    </Container>
  );
};

export default Shop;




// import axios from "axios";
// import { useEffect, useState } from "react";

// const Shop = () => {
//   const [productData, setProductData] = useState([])
//   const [page, setPage] = useState(1)
//   const [loading, setLoading] = useState(true)

//   const getProductData = async (page) => {
//     const url = `https://material-ui-first-project-server.vercel.app/api/v1/allproducts?_limit=9&_page=${page}`;
//     try {
//       const res = await fetch(url);
  
//       const data = await res.json();
//       setProductData((prev) => [...prev, ...data]);
//       setLoading(false)
//     } catch (error) {
//       console.error("Error fetching product data:", error);
//     }
//   };

//   const handleInfiniteScroll = async () => {
//     try{
//       if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
//         setLoading(true)
//         setPage((prev) => prev + 1)
//       }
//     } catch(error){
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     getProductData()
//   },[page])

//   useEffect(() => {
//     window.addEventListener('scroll', handleInfiniteScroll)
//     return() => window.removeEventListener('scroll', handleInfiniteScroll)
//   },[])

//   return (
//     <>
//     <h1 className="fixed mt-20">Product {productData.length}</h1>
//     <div className="grid grid-cols-3 gap-5">
//       {
//         productData?.map((product, idx) => (
//           <div key={idx} className="space-y-3 p-5 border border-solid border-red-400">
//             <img src={product.image} alt="" />            
//             <h1>{product.productTitle}</h1>
//             <p>{product.regularPrice}</p>
//             <p>{product.currentPrice}</p>
//           </div>
//         ))
//       }
//     </div>
//     {loading && <p>Loading............</p>}
//     </>
//   );
// };

// export default Shop;



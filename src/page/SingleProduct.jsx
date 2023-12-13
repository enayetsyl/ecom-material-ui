import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";



const SingleProduct = () => {
  const { id } = useParams()
  console.log(id)
  // // const productId = match.params.id;
  // const getProduct = async () => {
  //   const res = await fetch(`http://localhost:5000/api/v1/allproduct/${id}`)
  //   const data = await res.json()
  //   console.log(data)
  //   return data
  // }

  const { data: product, isLoading, isError } = useQuery({
    queryKey:['product'],
    queryFn: async () => {
      const result = await fetch(`http://localhost:5000/api/v1/allproduct/${id}`)
      return result.data;
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
    <div>
      <h1>{product.productTitle}</h1>
      {/* Display other product details as needed */}
      fafa
    </div>
  );
};

export default SingleProduct;

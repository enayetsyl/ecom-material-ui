import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./page/Home";
import Shop from "./page/Shop";
import SingleProduct from "./page/SingleProduct";
import ContactUs from "./page/ContactUs";
import Dashboard from "./Dashboard/Dashboard";
import AllProducts from "./Dashboard/AllProducts";
import AddProduct from "./Dashboard/AddProduct";
import AllOrders from "./Dashboard/AllOrders";
import OnHoldOrder from "./Dashboard/OnHoldOrder";
import ProcessingOrder from "./Dashboard/ProcessingOrder";
import CompleteOrder from "./Dashboard/CompleteOrder";
import AllBlogs from "./Dashboard/AllBlogs";
import AddBlog from "./Dashboard/AddBlog";

export  const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/shop',
        element: <Shop/>
      },
      {
        path:'/singleProduct/:id',
        element: <SingleProduct/>
      },
      {
        path:'/contactus',
        element: <ContactUs/>
      }
    ]
  },{
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'/allproducts',
        element:<AllProducts/>
      },
      {
        path:'/addproduct',
        element:<AddProduct/>
      },
      {
        path:'/allorders',
        element:<AllOrders/>
      },
      {
        path:'/onholdorder',
        element:<OnHoldOrder/>
      },
      {
        path:'/processingorder',
        element:<ProcessingOrder/>
      },
      {
        path:'/completeorder',
        element:<CompleteOrder/>
      },
      {
        path:'/allblogs',
        element:<AllBlogs/>
      },
      {
        path:'/addblog',
        element:<AddBlog/>
      },
    ]
  }
]);

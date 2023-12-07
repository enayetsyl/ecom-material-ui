import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./page/Home";
import Shop from "./page/Shop";

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
      }
    ]
  },
]);

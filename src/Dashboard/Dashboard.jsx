import { Box } from "@mui/material";
import { Outlet } from "react-router";
import NavDrawer from "../Component/Drawer";

const Dashboard = () => {
 return(
<>
<Box display='flex'
justifyContent='start'
alignItems='center'
>
<Box
width='240'
mr={2}
>
  <NavDrawer/>
</Box>
  <Outlet/>
</Box>
</>
 );
};

export default Dashboard;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../assets/logo.webp'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from 'react-router-dom';


const pages = ['Home', 'Shop', 'Blog', 'Contact Us'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState('Home');
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    <div>
       <AppBar position="fixed" 
       sx={{
        backgroundColor: 'white', color:'black'
       }}
       >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          {/* MENU ICON ON SMALL DEVICE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                 <Link
                 to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                 >
                 <Typography textAlign="center">{page}</Typography>
                 </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* LOGO IMAGE */}
          <Box
          sx={{
            display: 'flex',
              flexGrow: 1,
          }}>
            <img src={logo} alt="logo" className='h-20'/>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
             <Link key={page}>
              <Button
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                onClick={() => {handleCloseNavMenu();
                  setActivePage(page)                
                }}
                sx={{ my: 2, 
                  color: 'black', 
                  display: 'block', 
                  fontWeight: page === activePage ? 'bold' : 'normal',
                  fontSize: page === activePage ? '18px' : '14px',
                }}
                variant='text'
              >
                {page}
              </Button>
             </Link>
            ))}
          </Box>
          <IconButton>
            <AttachMoneyIcon
            sx={{
              color: 'black'
            }}
            />
          </IconButton>
          <Typography
          variant='h6'
          marginLeft={-1}
          >10000</Typography>
         <IconButton size='large'
         >
         <ShoppingCartCheckoutIcon
         sx={{color: 'black',
        }}
         />
         
         </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
};

export default Navbar;
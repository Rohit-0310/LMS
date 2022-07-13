import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



import {
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { auth } from '../config/firebase-config';


// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {

  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

//   const [user, setUser] = React.useState({});

  
//     onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
  

const logout = async () => {
    await signOut(auth);
  };
  const navigate = useNavigate()

  const handlLogin = () =>{
    navigate("/login")
  }








  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (
      <AppBar position="static" 
      style={{backgroundColor: "white", color: "black"}}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              style={{marginLeft:"150px"}}
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
            </Typography>

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
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
                <Typography textAlign="center">Lectures</Typography>
                <Typography textAlign="center">Assignments</Typography>
                <Typography textAlign="center">Quizzes</Typography>
                <Typography textAlign="center">Tickets</Typography>
                <Typography textAlign="center">Discussions</Typography>
                <Typography textAlign="center">Notifications</Typography>
                <Typography textAlign="center">Electives</Typography>
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
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
              <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))} */}
                <Button style={{color:"#6b7280"}} textAlign="center">Lectures</Button>
                <Button style={{color:"#6b7280"}} textAlign="center">Assignments</Button>
                <Button style={{color:"#6b7280"}} textAlign="center">Quizzes</Button>
                <Button style={{color:"#6b7280"}} textAlign="center">Tickets</Button>
                <Button style={{color:"#6b7280"}} textAlign="center">Discussions</Button>
                <Button style={{color:"#6b7280"}} textAlign="center">Notifications</Button>
                <Button style={{color:"#6b7280"}} textAlign="center">Electives</Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}
            style={{marginRight:"150px"}}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Typography textAlign="center">{user.email}</Typography> */}

                <Typography textAlign="center">Rohit Kumar(Fw11_167)</Typography>
                <KeyboardArrowDownIcon />
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}


                <MenuItem>
                    <Typography  textAlign="center" style={{ color:"#a9abbb"}} >Manage Account</Typography>
                </MenuItem>
                <hr/>

                <MenuItem>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <hr/>

                <MenuItem onClick={()=>handlLogin()}>
                    <Typography textAlign="center">Log In</Typography>
                </MenuItem>
                <hr/>

                <MenuItem>
                    <Typography onClick={logout} textAlign="center">Log Out</Typography>
                </MenuItem>






              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
};
export default NavBar;

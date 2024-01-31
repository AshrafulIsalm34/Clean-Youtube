// import * as React from "react";
// import { useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import Link from "@mui/material/Link";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import {
//   Button,
//   Container,
//   Stack,
//   MenuItem,
// } from "@mui/material";
// import PlaylistForm from "../playList-form/Index";



// const NavBar = () => {
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

//   return (
//     <Box >
//       <AppBar position="sticky" color="default" sx={{ py: 1 }}>
//         <Container maxWidth="lg" >
//           <Toolbar >
//             <Stack  spacing={1} sx={{ flexGrow:'1',}} >
//               <Link
//                 to="/"
//                 component={RouterLink}
//                 sx={{ textDecoration: "none", color: "black" }}
//               >
//                 <Typography variant="h5">Clean Youtube</Typography>
//               </Link>

//               <Link
//                 href="https://github.com/AshrafulIsalm34"
//                 target="_blank"
//                 sx={{ textDecoration: "none", color: "black" }}
//               >
//                 <Typography variant="h5">By Ashraful Islam</Typography>
//               </Link>
//             </Stack>
              
//             <Stack sx={{ display: 'flex', flexDirection:'row', gap:'10px',alignItems:'center'}}>
//                 <Typography variant="body1" sx={{ display: 'flex', flexDirection:'row', gap:'10px'}}>
//                     <Link to='/' component={RouterLink} sx={{cursor:'pointer',textDecoration:'none',color:'#FF0000',}}>Home</Link>
//                     <Link to='/recents' component={RouterLink} sx={{cursor:'pointer',textDecoration:'none',color:'#FF0000',}}>Recents</Link>
//                     <Link to='/favorites' component={RouterLink} sx={{cursor:'pointer',textDecoration:'none',color:'#FF0000'}}>Favorites</Link>
//                 </Typography>

                
//                 <MenuItem>
                  // <Button size="small" variant="contained" onClick={handleClickOpen} sx={{
                  //         backgroundColor: '#FF0000',
                  //         '&:hover': {
                  //           color: '#FF0000',
                  //           backgroundColor: 'transparent',
                  //         },
                  //       }}>
                  //       Add Playlist
                  // </Button>
//                 </MenuItem>
//             </Stack>
  
//             <PlaylistForm handleClose={handleClose} open={open} />
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// };

// export default NavBar;




import * as React from 'react';
import { useState } from "react";
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

import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import {
  Stack,
} from "@mui/material";
import PlaylistForm from '../playList-form/Index';




function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = useState(false);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack  spacing={1} sx={{ flexGrow:'1',}} >
               <Link
                 to="/"
                 component={RouterLink}
                 sx={{ textDecoration: "none", color: "black" }}
               >
                 <Typography variant="h5">Clean Youtube</Typography>
               </Link>

               <Link
                 href="https://github.com/AshrafulIsalm34"
                 target="_blank"
                 sx={{ textDecoration: "none", color: "black" }}
               >
                 <Typography variant="h5">By Ashraful Islam</Typography>
               </Link>
             </Stack>

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
                display: { xs: 'block', md: 'block' },
              }}
            >
                <MenuItem  onClick={handleCloseNavMenu}>
                 <Link to='/' component={RouterLink} sx={{cursor:'pointer',textDecoration:'none',color:'#00000',}}>Home</Link>
                 <Link to='/recents' component={RouterLink} sx={{cursor:'pointer',textDecoration:'none',color:'#00000',}}>Recents</Link>
                 <Link to='/favorites' component={RouterLink} sx={{cursor:'pointer',textDecoration:'none',color:'#00000'}}>Favorites</Link>
                 
                </MenuItem>
                
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex',flexDirection:'row',gap:'2' }}
                
              >
                 <Link to='/' component={RouterLink} sx={{cursor:'pointer',textDecoration:'none',color:'#ffff',}}>Home</Link>
                
              </Button>

              <Button  onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex',flexDirection:'row',gap:'2' }}>
                <Link to='/recents' component={RouterLink} sx={{cursor:'pointer',textDecoration:'none',color:'#ffff',}}>Recents</Link>
              </Button>

              <Button  onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex',flexDirection:'row',gap:'2' }}>
                  <Link to='/favorites' component={RouterLink} sx={{cursor:'pointer',textDecoration:'none',color:'#ffff'}}>Favorites</Link>

              </Button>
          </Box>
          <Button size="small" variant="contained" onClick={handleClickOpen} sx={{
                  backgroundColor: '#FF0000',
                  '&:hover': {
                    color: '#FF0000',
                    backgroundColor: 'transparent',
                  },
         
                }}>
                Add Playlist
          </Button>
          <PlaylistForm handleClose={handleClose} open={open} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;












import {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Chip from '@mui/material/Chip';
import DownloadIcon from '@mui/icons-material/Download';
import Avatar from '@mui/material/Avatar';



import { Link, useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import VideoLinkCard from '../../Shared/Video-Link-Card/videoLinkCard';
import { Card, Grid, Stack } from '@mui/material';
import YouTube from 'react-youtube';



const drawerWidth = 350;

const Main = styled('main', { shouldForwardProp: (props) => props !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    position: 'relative',
  }),
);



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (props) => props !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));



const PlayerPage = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const playlists = useStoreState((state)=>state.playlists.data)
  const { playlistId, videoId,index } = useParams();
  const current = playlists[playlistId]

  const playlistItems = current.playlistItems
  const [title,setTitle] = useState('')




  const opts = {
      width: '900',
      height: '480',
      playerVars: {
        autoplay: 0,
      },
    };
  
    // const onPLayerReady = (event) => {
    //   event.target.pauseVideo();
    // };
  
    const videoOnReady = (event) => {

      setTitle(event.target.videoTitle)
      event.target.seekTo(50);
    }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box >
      <CssBaseline />
      <AppBar position='static' open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            {current.playlistTitle}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Main open={open} sx={{marginRight:'0', width:'950px'}}>
        <Link>
          <Box  sx={{ flexGrow: 1 }}>
          <Grid >
            <YouTube
              
              videoId={videoId}
              opts={opts}
              onReady={videoOnReady}
            />
          </Grid>
        
        </Box>

        <Card sx={{ marginTop: 2, padding: 2, border: '1px #0F0F0F solid' }}>
          <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mb={5}>

          <Chip
            avatar={<Avatar alt="" src={`https://www.youtube.com/channel/${current.channelId}`} />}
            label={current.channelTitle}
            variant="outlined"
          />

          <Chip  icon={<DownloadIcon />} label="Download" variant="outlined" />

          </Stack>
       

          <Typography variant="body1" >
            {title}
          </Typography>

        </Card>
        </Link>
  
      </Main >

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
           position:'fixed',
           top: 88,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography>{`${index}/${playlistItems.length} - ${current.playlistTitle}`}</Typography>
          
        </DrawerHeader>
        <Divider />
        
        <Box>
        {playlistItems.map((item,index) => (
          <Link  key={item.contentDetails.videoId} >
              <VideoLinkCard
              channelTitle={current.channelTitle}
              title={item.title}
              thumbnail={item.thumbnails.default}
              playlistId={playlistId}
              videoId={item.contentDetails.videoId}
              index={index}           
            />
          </Link>
				))}
        </Box>
        <Divider />
      </Drawer>
    </Box>
  );
}

export default PlayerPage;
/* eslint-disable no-restricted-globals */
import * as React from 'react';
import {useState,forwardRef} from 'react';
import Card from '@mui/material/Card';
import {useStoreActions,useStoreState} from 'easy-peasy'
import { Link, Link as RouterLink } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Alert, Box, Button, CardActions, Chip, Dialog, DialogActions, DialogContent, DialogContentText, Slide, Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { PlayCircleFilled } from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';


const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
  });



const PlaylistCardItem =({playlistThumbnail,playlistTitle,channelTitle,playlistId,deleteBtnDisplay,})=> {


  const recant = useStoreActions((actions)=>actions.recents)
  const favorites = useStoreActions((actions)=>actions.favorites)
  const playlist = useStoreActions ((actions)=>actions.playlists)
  const playlists = useStoreState ((actions)=>actions.playlists.data)

  let recantItem = useStoreState((state) => state.recents.items);
  let favoritesItem = useStoreState((actions)=>actions.favorites.items)

  const current = playlists[playlistId]

  const playlistItems = current.playlistItems





  const [state, setState] = useState({
	open: false,
	vertical: 'top',
	horizontal: 'center',
});
 

 const [openDialog, setOpenDialog] = useState(false);

 

    const handleClick = () => {
		  recant.addToRecent(playlistId);
	};


    const handleDelete = () => {

	  playlist.deletePlaylist(playlistId);
        let favoritesIndex = favoritesItem.findIndex((item) => item === playlistId)
        favoritesItem = favoritesItem.splice(favoritesIndex,1)
        const recantIndex = recantItem.findIndex((item)=>item === playlistId)
        recantItem = recantItem.splice(recantIndex,1)
    }


    const addFavorite =()=>{
      favorites.addToFavorite(playlistId)
    }

    const removeFavorite =()=>{
      favorites.removeFormFavorite(playlistId)
    }


	const { vertical, horizontal, open } = state;

	const SnackHandleClick = (newState) =>() => {
	  setState({ ...newState, open: true });
	};

	const handleClose = () => {
		setState({ ...state, open: false });
	};

  


	const handleClickOpen = () => {
	  setOpenDialog(true);
	};
  
	const handleCloseDialog = () => {
	  setOpenDialog(false);
	};

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      margin: 1,
      paddingBottom: 2,
      border: '1px solid #0F0F0F',
    }}>

      <CardMedia
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitle}
		width={playlistThumbnail.width}
		height={playlistThumbnail.height}
      />

      	<Stack  direction={'column'}>
				<CardContent>
					<Typography variant="h6" color="text.primary">
						{`${
							playlistTitle.length > 30
								? playlistTitle.substr(0, 30) + '...'
								: playlistTitle
						}`}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{channelTitle}
					</Typography>
				</CardContent>

				<Box sx={{ flexGrow: 1,width:'100%', height:'5px' }}></Box>
			<CardActions display={'flex'} direction="row" alignItems='center' >
			
				<Stack sx={{width:'100%'}}>
					
					{playlistItems.map((item,index)=>(

						<Link
							key={item.contentDetails.videoId}
							to={`/player/${playlistId}/${item.contentDetails.videoId}/${index}`}
							style={{textDecoration:'none',fontSize:'18px'}}
							component={RouterLink}
							onClick={handleClick}		
							color='#00000'	

							>
							{index ===0 && <Chip icon={<PlayCircleFilled sx={{mr:0.5,}}/>} label="Show Playlist" />}

							

						</Link>

					))}
				</Stack>
				
					
										
					<Snackbar
						anchorOrigin={{ vertical, horizontal }}
						open={open}
						onClose={handleClose}
						message=""
						severity="success"
						key={vertical + horizontal}
					>

					<Alert
						onClose={handleClose}
						severity="success"
						variant="filled"
						sx={{ width: '100%' }}
					>
						Your Favorite Playlist is added!
					</Alert>
				</Snackbar>

						
					

				<Stack display={'flex'} flexDirection={'row'} sx={{width:'100%'}} justifyContent={'right'}>
				<Link>
						{favoritesItem.includes(playlistId) && (
							<FavoriteIcon
								onClick={removeFavorite}
								sx={{ color: '#FF0000', }}
								
							/>
						)}
					</Link>

					<Link onClick={SnackHandleClick({ vertical: 'top', horizontal: 'right' })}>
						{!favoritesItem.includes(playlistId) && (
							<FavoriteBorderIcon
								onClick={addFavorite}
								sx={{ color: '#FF0000'}}
							/>
						)}
					</Link>
							
					<Link onClick={handleClickOpen}>
						<DeleteIcon
							sx={{
								color: '#ff0000',
								cursor: 'pointer',
								display: deleteBtnDisplay,
								ml:2
							}}
						/>
					</Link>



					<Dialog
							open={openDialog}
							TransitionComponent={Transition}
							keepMounted
							onClose={handleCloseDialog}
							aria-describedby="alert-dialog-slide-description"
							
						>
						<DialogContent >
							<DialogContentText id="alert-dialog-slide-description">
							Do you want to Deleted Playlist items, Sure?
							</DialogContentText>
						</DialogContent>
						

						<DialogActions>
							<Button onClick={handleCloseDialog}>Cancel</Button>
							<Button onClick={()=>{handleDelete()}}>Yes</Button>
						</DialogActions>
						
						</Dialog>
					
				</Stack>
			</CardActions>
        </Stack>
    </Card>
  );
}


export default PlaylistCardItem;
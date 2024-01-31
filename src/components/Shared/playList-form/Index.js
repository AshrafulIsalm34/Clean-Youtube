
import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {useStoreActions,useStoreState} from 'easy-peasy'

const PlaylistForm=({open,handleClose})=> {
 const [state,setState] = useState('')



 const playlist = useStoreActions((actions)=>actions.playlists)

 const data = useStoreState((state) => state.playlists)


 const handleSubmit=(e)=>{
    //Todo : handle url later
    e.preventDefault()

    if(!state){
      alert('Please insert a valid id or link.');
			return;
    }

    if(state.includes('youtube.com')){
      const id = state.split('=')[1]
      if(Object.keys(data).includes(id)){
        alert('The playlist is already exists. Please enter a new one.');
      }

      playlist.getPlaylist(id)
      setState('')
      handleClose()
      return;
    }

    if (Object.keys(data).includes(state)) {
			alert('The playlist is already exists. Please enter a new one.');
		}

    playlist.getPlaylist(state);
    setState('');
    handleClose();
 }

  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Add a new Playlist please insert the Playlist id or Playlist Link. please make sure the link is correct. Otherwise we wont able the  fetch Playlist information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Inset Playlist Id or Link"
            fullWidth
            variant="standard"
            onChange={(e)=>setState(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>
  );
}

export default PlaylistForm;
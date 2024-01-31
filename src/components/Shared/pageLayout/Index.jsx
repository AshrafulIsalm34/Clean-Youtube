import { Container, Grid, Typography } from '@mui/material'
import PlaylistCardItem from '../Playlist-cardItem/Index'

const PageLayout = ({children,items,pageTitle,deleteBtnDisplay}) => {


  return (
    <Container maxWidth={'lg'}>
      
        <Typography variant='h3' align='center' sx={{marginBottom:2, marginTop: 2, textDecoration:'none'}}>
            {pageTitle}
        </Typography>

            <div>
                {children}
            </div>

            {items.length === 0 &&(
                (<Typography variant="body2" align="center" sx={{ marginBottom: 2,fontSize:'18px' }} color={'red'}>
                    There is not Data. Please add new!
                </Typography>)
            )}




            {items.length !== 0 && (<Grid container alignItems="stretch" >
            {items.map((item)=>(
                    <Grid item key={item.playlistId} md={6} lg={4} mb={2} >
                        <PlaylistCardItem
                            playlistId={item.playlistId}
                            playlistThumbnail={item.playlistThumbnail}
                            playlistTitle={item.playlistTitle}
                            channelTitle={item.channelTitle}
                            deleteBtnDisplay={deleteBtnDisplay}
                        />
                    </Grid>
                ))}
            </Grid>)} 
    

    </Container>
  )
}

export default PageLayout

 
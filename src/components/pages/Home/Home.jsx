
import { Typography } from "@mui/material";
import {useStoreState} from 'easy-peasy'
import PageLayout from "../../Shared/pageLayout/Index";



const Home = () => {

  const {data,isLoading} = useStoreState((state)=>state.playlists)

  const playlistArray = Object.values(data)


    
    return (
          <PageLayout items={playlistArray} pageTitle={'My Playlist'}>

          {isLoading && (
            <Typography 
              variant="h3" 
              color={'#FF0000'} 
              align="center"> 
              Loading ...
              </Typography>)}

          </PageLayout>
          
    )
  };

  export default Home;
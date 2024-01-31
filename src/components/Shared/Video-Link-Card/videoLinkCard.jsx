import { CardContent, CardMedia, Stack, Typography,Card, Box } from "@mui/material"
import {  NavLink } from "react-router-dom"


const VideoLinkCard = ({title,thumbnail,playlistId,videoId,channelTitle,index}) => {


const activeClass = {
	color: '#FF0000',
	border: '2px solid #FF0000',
	borderRadius: 5,
	textDecoration: 'none',
	marginTop: 10,
};

const nonActiveClass = {
	backgroundColor: '#fff',
	color: '#0f0f0f',
	textDecoration: 'none',
	marginTop: 10,
};

  return (
    <NavLink to={`/player/${playlistId}/${videoId}/${index+1}`} style={({ isActive }) => (isActive ? activeClass : nonActiveClass)} >
        <Card  sx={{
                '&:hover': {
                    backgroundColor: '#b6b6b6',
                },
                mb:2
			}}>
            <Stack direction={{ sm: 'column', md: 'row' }}
					justifyContent="space-between"
					alignItems="center"
					spacing={{ sm: 1, md: 2 }}
                    >

                <Typography variant="h6" gutterBottom>{index}</Typography>


                <CardMedia
                    component="img"
                    sx={{
                        width: thumbnail?.width,
                        height: thumbnail?.height,
                    }}
                    image={thumbnail?.url}
                    alt={title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                    <CardContent >
                        <Typography variant="subTitle1" component='div'>
                            {`${title.length>50 ? title.substr(0,30)+'...':title}`}
                        </Typography>
                        <Typography  component="div" variant="subTitle2" color={'text.secondary'}>
                            {channelTitle}
                        </Typography>
                    </CardContent>
                </Box> 
                      
            </Stack>
        </Card>
    </NavLink>
  )
}

export default VideoLinkCard
import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY


const getPlaylistItem =async (playlistId, pageToken='', result=[])=>{


    const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`

    const {data} = await axios.get(URL)
    result = [...result,...data.items]
    if(data.nextPageToken){
        result = getPlaylistItem(playlistId,data.nextPageToken, result)
    }

    return result;
};

const getPlayList = async (playlistId)=>{
    const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`

    const {data} = await axios.get(URL)

    let playlistItems = await getPlaylistItem(playlistId)

        const {title:playlistTitle,channelId,description:playlistDescription,thumbnails,channelTitle}=data?.items[0]?.snippet


    playlistItems = playlistItems.map((item)=>{
            const {title,description,thumbnails} = item.snippet


     return{
         title,
         description,
         thumbnails,
         contentDetails: item.contentDetails
     }
    });

    return{
        playlistId,
        playlistTitle,
        playlistDescription,
        playlistThumbnail:thumbnails.medium,
        channelId,
        channelTitle,
        playlistItems
    }
    
}


export default getPlayList;
/* eslint-disable no-unused-expressions */
import {action,thunk,persist} from 'easy-peasy'
import getPlayList from '../api/Index'
// import getPlayList_id from '../utils/IsValidateURL'


const playlistModel=persist({
    data:{},
    isLoading:false,
    error:'',
    addPlaylist: action((state,payload)=>{
        state.data[payload.playlistId] = payload
    }),
    deletePlaylist: action((state, payload) => {
        delete state.data[payload];
    }),

    setLoading: action((state,payload)=>{
        state.isLoading = payload
    }),

    setError: action((state,payload)=>{
        state.error = payload
    }),


    getPlaylist: thunk(async({addPlaylist,setError,setLoading},playlistId,{getState})=>{
        if(getState().data[playlistId]){
            return;
        }

        setLoading(true)

        try {
            // const playListId = getPlayList_id(playlistId)
            const playlist = await getPlayList(playlistId)
            addPlaylist(playlist)
            
        } catch (error) {
            setError(error.response?.data?.error?.message || 'Something Went Wrong!')
        }finally{
            setLoading(false)
        }
    })
},
{
    storage: 'localStorage',
}

)

export default playlistModel;
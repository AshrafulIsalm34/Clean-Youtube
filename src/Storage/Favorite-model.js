import {action, persist} from 'easy-peasy'

const FavoriteModel = persist({
    items:[],
    addToFavorite: action((state,playlistId)=>{
        state.items.push(playlistId)
    }),
    removeFormFavorite: action((state,playlistId)=>{
        state.items = state.items.filter((pId) => playlistId !== pId)
    })

},
{
    storage: 'localStorage',
}
)


export default FavoriteModel;
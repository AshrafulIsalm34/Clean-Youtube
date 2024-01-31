import { useStoreState } from "easy-peasy"
import PageLayout from "../../Shared/pageLayout/Index";

const Favorites = () => {
  const playlists = useStoreState((state)=>state.playlists.data)
  const favorites = useStoreState((state)=>state.favorites.items)
  const favoritesArray = favorites.map((item)=>playlists[item])


  return (
    <PageLayout items={favoritesArray} pageTitle={'Favorites Playlists'} deleteBtnDisplay={'none'}/>
  )
}

export default Favorites
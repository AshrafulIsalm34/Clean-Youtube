
import {useStoreState} from 'easy-peasy'
import PageLayout from '../../Shared/pageLayout/Index';

const Recent = () => {

  const playlists = useStoreState((state) => state.playlists.data);
	const recent = useStoreState((state) => state.recents.items);
	const recantArray =  recent.map((item)=>playlists[item]).slice(0,5)


  return (
    <PageLayout items={recantArray} pageTitle={'Recant Playlists'}/>
  )

}

export default Recent;
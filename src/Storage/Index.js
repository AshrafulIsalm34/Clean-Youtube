import { createStore } from 'easy-peasy';
import playlistModel from './Playlist-model';
import FavoriteModel from './Favorite-model';
import RecentModel from './Recent-model';

const store = createStore({
    playlists: playlistModel,
    favorites: FavoriteModel,
    recents: RecentModel,
});

export default store
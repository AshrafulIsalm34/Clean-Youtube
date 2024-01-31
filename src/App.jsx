
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import PlayerPage from "./components/pages/PlayerPage/Index";
import NotFound from "./components/pages/NotFound/Index";

import NavBar from './components/Shared/AppBar/Index'
import Recent from "./components/pages/Recents/Recent";
import Favorites from "./components/pages/Favorites/Favorites";


const App = () => {

  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/player/:playlistId/:videoId/:index" element={<PlayerPage/>} />
        <Route path="/recents" element={<Recent/>}/>
        <Route path="/favorites" element={<Favorites/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;

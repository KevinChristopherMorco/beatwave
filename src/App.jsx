import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-roboto";
import "typeface-raleway";

import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Artist from "./pages/artist/Artist";
import Search from "./pages/search/Search";
import Album from "./pages/album/Album";
import Podcast from "./pages/podcast/Podcast";
import ViewAllData from "./components/shared/page/ViewAllData";
import SimilarArtist from "./pages/artist/SimilarArtist";
import TopTracks from "./pages/artist/TopTracks";
import TopAlbums from "./pages/artist/TopAlbums";
import Favorites from "./pages/favorites/Favorites";
import FavoriteProvider from "./hooks/FavoriteProvider";

function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/artist/:artistID" element={<Artist />} />
            <Route path="/album/:albumID" element={<Album />} />
            <Route path="/podcast/:podcastID" element={<Podcast />} />
            <Route path="/favorites/" element={<Favorites />} />

            <Route path="/search" element={<Search />} />
            <Route path="/all" element={<ViewAllData />} />
            <Route
              path="/artist/:artistID/similar-artist"
              element={<SimilarArtist />}
            />
            <Route
              path="/artist/:artistID/top-tracks"
              element={<TopTracks />}
            />
            <Route
              path="/artist/:artistID/top-albums"
              element={<TopAlbums />}
            />
          </Route>
        </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;

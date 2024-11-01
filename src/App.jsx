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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/artist/:artistID" element={<Artist />} />
          <Route path="/album/:albumID" element={<Album />} />
          <Route path="/podcast/:podcastID" element={<Podcast />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

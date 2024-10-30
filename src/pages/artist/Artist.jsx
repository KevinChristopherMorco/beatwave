import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";

import ArtistHeader from "../../components/artist/ArtistHeader";

const Artist = () => {
  const { artistID } = useParams();
  const { musicData, isLoading, getArtistInformation } = useMusicApi();

  useEffect(() => {
    getArtistInformation(artistID);
  }, []);

  if (isLoading) return;

  return (
    <section>
      <ArtistHeader musicData={musicData} />
    </section>
  );
};

export default Artist;

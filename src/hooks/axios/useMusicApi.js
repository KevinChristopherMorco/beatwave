import axios from "axios";
import { useState } from "react";

const useMusicApi = () => {
  const [musicData, setMusicData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getArtistInformation = async (id) => {
    const isLocalExisting = JSON.parse(localStorage.getItem("artist-info"));
    if (isLocalExisting) {
      setMusicData(isLocalExisting);
    }
    try {
      const response = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${id}`
      );
      setMusicData(response.data);
      localStorage.setItem("artist-info", JSON.stringify(response.data));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getChartInformation = async () => {
    try {
      const response = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/chart`
      );
      setMusicData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getAlbumInformation = async (id) => {
    try {
      const response = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/album/${id}`
      );
      setMusicData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getArtistsAllData = async (id) => {
    try {
      const trackResponse = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${id}/top?limit=50`
      );

      console.log(trackResponse);

      const artistResponse = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${id}`
      );

      const artistAlbum = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${id}/albums`
      );

      const appendData = {
        tracks: trackResponse.data,
        artist: artistResponse.data,
        albums: artistAlbum,
      };

      setMusicData(appendData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    musicData,
    isLoading,
    getArtistInformation,
    getChartInformation,
    getAlbumInformation,
    getArtistsAllData,
  };
};

export default useMusicApi;

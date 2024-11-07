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
        `https://corsproxy.io/?https://api.deezer.com/artist/${id}`,
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
        `https://corsproxy.io/?https://api.deezer.com/chart`,
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
        `https://corsproxy.io/?https://api.deezer.com/album/${id}`,
      );

      setMusicData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getPodcastInformation = async (id) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/podcast/${id}`,
      );
      setMusicData(response.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getGenre = async () => {
    try {
      const response = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/genre`,
      );
      setMusicData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getSearchResults = async (query) => {
    try {
      setLoading(true);

      const artistResponse = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/search/artist?q="${query}"`,
      );

      const trackResponse = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/search/track?q="${query}"`,
      );

      const albumResponse = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/search/album?q="${query}"`,
      );

      const podcastResponse = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/search/podcast?q="${query}"`,
      );

      const similarArtists = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${artistResponse.data.data[0].id}/related`,
      );

      const appendData = {
        tracks: trackResponse.data,
        artist: artistResponse.data,
        albums: albumResponse.data,
        podcasts: podcastResponse.data,
        similarArtist: similarArtists.data,
      };
      console.log(appendData);

      setMusicData(appendData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getArtistsAllData = async (id) => {
    try {
      setLoading(true);
      const trackResponse = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${id}/top?limit=50`,
      );

      const artistResponse = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${id}`,
      );

      const artistAlbum = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${id}/albums`,
      );
      const similarArtists = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${id}/related`,
      );

      const appendData = {
        tracks: trackResponse.data,
        artist: artistResponse.data,
        similar: similarArtists.data,
        albums: artistAlbum.data,
      };

      setMusicData(appendData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getAlbumAllData = async (id) => {
    try {
      setLoading(true);

      const album = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/album/${id}`,
      );

      const artistAlbum = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${album.data.artist.id}/albums`,
      );

      const similarArtists = await axios.get(
        `https://corsproxy.io/?https://api.deezer.com/artist/${album.data.artist.id}/related`,
      );

      const appendData = {
        albumInformation: album.data,
        similarArtists: similarArtists.data,
        artistAlbum: artistAlbum.data,
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
    getPodcastInformation,
    getGenre,
    getSearchResults,
    getArtistsAllData,
    getAlbumAllData,
  };
};

export default useMusicApi;

import { useEffect, useState } from "react";
import useMusicApi from "../axios/useMusicApi";

const useSearch = () => {
  const { musicData, searchData, isLoading, getSearchResults } = useMusicApi();
  const [artist, setArtist] = useState();
  const [query, setQuery] = useState("");

  const handleSearchQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const artistResult = musicData?.data?.filter((item, index, arr) => {
    return (
      arr.findIndex((existing) => existing.artist.id === item.artist.id) ===
      index
    );
  });

  //   const searchArtistResult = searchData?.data?.filter((item, index, arr) => {
  //     return (
  //       arr.findIndex((existing) => existing.artist.id === item.artist.id) ===
  //       index
  //     );
  //   });

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      getSearchResults(query);
    }, 100);

    console.log(musicData);

    return () => clearTimeout(delaySearch);
  }, [query]);

  return {
    query,
    musicData,
    isLoading,
    artistResult,
    handleSearchQuery,
  };
};

export default useSearch;

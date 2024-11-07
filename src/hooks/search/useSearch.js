import { useEffect, useState } from "react";
import useMusicApi from "../axios/useMusicApi";

const useSearch = () => {
  const { musicData, searchData, isLoading, getSearchResults } = useMusicApi();
  const [artist, setArtist] = useState();
  const [query, setQuery] = useState("");

  console.log(query);

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

  useEffect(() => {
    if (query.length === 0) return;
    const delaySearch = setTimeout(() => {
      getSearchResults(query);
    }, 500);

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

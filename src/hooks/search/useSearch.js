import { useEffect, useState } from "react";
import useMusicApi from "../axios/useMusicApi";

const useSearch = () => {
  const { musicData, isLoading, getSearchResults } = useMusicApi();
  const [query, setQuery] = useState("");
  const [isToggleSearch, setToggleSearch] = useState("");
  const [isToggleSearchView, setToggleSearchView] = useState("");

  const handleSearchQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSearchView = (query) => {
    if (query.length > 0) {
      setToggleSearchView(true);
      return;
    }

    setToggleSearchView(false);
  };

  const handleSearchToggle = () => setToggleSearch(!isToggleSearch);

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
    isToggleSearch,
    isToggleSearchView,
    handleSearchToggle,
    handleSearchView,
    handleSearchQuery,
  };
};

export default useSearch;

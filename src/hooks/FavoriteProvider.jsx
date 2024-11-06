import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favoriteStorage, setFavoriteStorage] = useState(
    JSON.parse(localStorage.getItem("MyFavorites")) || {
      artists: [],
      tracks: [],
      albums: [],
    },
  );

  return (
    <FavoriteContext.Provider value={{ favoriteStorage, setFavoriteStorage }}>
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavoriteContext = () => useContext(FavoriteContext);

export default FavoriteProvider;
export { useFavoriteContext };

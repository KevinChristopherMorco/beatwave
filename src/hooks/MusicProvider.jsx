import React, { createContext, useContext, useRef, useState } from "react";

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState("");

  const handlePlayAudio = (audio) => {
    audioRef.current.src = audio;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentAudio(audio);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentAudio(audio);
    }
  };

  return (
    <MusicContext.Provider value={{ currentAudio, isPlaying, handlePlayAudio }}>
      {children}
    </MusicContext.Provider>
  );
};

const useMusicContext = () => useContext(MusicContext);

export default MusicProvider;
export { useMusicContext };

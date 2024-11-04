import { useRef } from "react";

const usePlayMusic = () => {
  const audioRef = useRef(new Audio());

  const handlePlayAudio = (audio) => {
    if (audioRef.current === audio) {
      audioRef.current.pause();
    } else {
      audioRef.current.pause();
      audioRef.current.src = audio;
      audioRef.current.play();
    }
  };

  return handlePlayAudio;
};

export default usePlayMusic;

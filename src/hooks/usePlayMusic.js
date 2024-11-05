import { useRef, useState } from "react";

const usePlayMusic = () => {
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

  return { currentAudio, isPlaying, handlePlayAudio };
};

export default usePlayMusic;

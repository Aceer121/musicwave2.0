import { createContext, useContext, useState } from 'react';

// Create a Context for Music State
const MusicContext = createContext();

// Custom hook to access the context
export const useMusic = () => useContext(MusicContext);

// MusicProvider component to wrap your app and provide the music state
export const MusicProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  return (
    <MusicContext.Provider value={{ currentSong, playSong, pauseSong, isPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};

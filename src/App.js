import { useEffect, useState } from 'react';
import Header from './components/Header';
import SongCard from './components/SongCard';
import Player from './components/Player';
import { MusicProvider, useMusic } from './context/MusicContext';
import spotifyApi from './api';

const AppContent = () => {
  const { playSong } = useMusic();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch songs from Spotify API
    spotifyApi.getPlaylistTracks('YOUR_SPOTIFY_PLAYLIST_ID').then((response) => {
      setSongs(response.items);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="grid grid-cols-3 gap-4 p-4">
        {songs.map((song) => (
          <SongCard
            key={song.track.id}
            song={song.track}
            onClick={() => playSong(song.track)}
          />
        ))}
      </div>
      <Player />
    </div>
  );
};

const App = () => {
  return (
    <MusicProvider>
      <AppContent />
    </MusicProvider>
  );
};

export default App;

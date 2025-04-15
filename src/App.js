import React from 'react';
import Header from './components/Header'; // Example of another component

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <Header />
      <h1 className="text-5xl font-bold text-lime-500 mt-10">MusicWave</h1>
      <h2 className="text-xl text-lime-400 mt-4">Welcome to MusicWave!</h2>
    </div>
  );
};

export default App;

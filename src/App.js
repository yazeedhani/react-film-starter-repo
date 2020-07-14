import React from 'react';
import './App.css';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import TMDB from './TMDB';

function App() {
  return (
    <div className="film-library">
      <FilmListing films={TMDB.films} />
      <FilmDetails films={TMDB.films} />
    </div>
  );
}

export default App;
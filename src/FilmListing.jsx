import React, { useState } from 'react';
import FilmRow from './FilmRow';

function FilmListing(props) {
  const [filter, setFilter] = useState('all')
  const [faves, setFaves] = useState([])

  const handleFilterClick = filter => {
    console.log(`Setting filter to ${filter}`)
    setFilter(filter)
  }

  const onFaveToggle = (film) => {
    // make a copy of faves
    let newFaves = [...faves];
    let faveIndex = faves.indexOf(film);
    // check if a film is in the faves
    if (faveIndex >= 0) {
      // If film is in faves array, take it out
      newFaves.splice(faveIndex, 1);
    } else {
      // else put it in the array
      newFaves = [...newFaves, film];
    }
    // set faves equal to our new mutated array.
    setFaves(newFaves)
  }

  // set relevant array (filmsToDisplay)
  let filmsToDisplay = filter === 'all' ? props.films : faves;

  const allFilms = filmsToDisplay.map((film, i) => (
    <FilmRow 
      key={`filmRow-${i}`} 
      film={film} 
      handleDetailsClick={props.handleDetailsClick}
      onFaveToggle={onFaveToggle}
      isFave={faves.includes(film)}
    />
  ))

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <div className="film-list-filters">
        <div 
          className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} 
          onClick={() => handleFilterClick('all')}
        >
          ALL
          <span className="section-count">{props.films.length}</span>
        </div>
        <div 
          className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} 
          onClick={() => handleFilterClick('faves')}
        >
          FAVES
          <span className="section-count">{faves.length}</span>
        </div>
    </div>

    {allFilms}
  </div>
  );
}

export default FilmListing;
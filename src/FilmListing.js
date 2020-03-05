import React from 'react';
import FilmRow from './FilmRow';

export default function FilmListing(props) {
  let filmTitles = props.films.map(film => { return <FilmRow film={film} />})

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      <h1>{filmTitles}</h1>
    </div>
  )
}
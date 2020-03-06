import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

export default function FilmRow(props) {
  let handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
  }

  return (
    <div className="film-row" onClick={()=>{handleDetailsClick(props.film)}}>
      <FilmPoster src={`https://image.tmdb.org/t/p/w780${props.film.poster_path}`} alt={`Poster of the ${props.film.release_date.split("-")[0]} film ${props.film.title}`} />

      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{props.film.release_date.split("-")[0]}</p>
      </div>
      <Fave />
    </div>
  )
}
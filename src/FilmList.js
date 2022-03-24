import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmList extends Component
{
    render()
    {
        const allFilms = this.props.films.map( (film, index) => {
            return <FilmRow film={film} index={index} key={index}/>
        })

        return(
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        )
    }
}
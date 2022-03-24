import React, { Component } from "react";
import Poster from "./Poster";

export default class FilmRow extends Component
{
    render()
    {
        console.log(this.props)
        return(
            <div className="film-row">
                <Poster url={this.props.film.poster_path} />

                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.substring(0,4)}</p>
                </div>
            </div>
        )
    }
}
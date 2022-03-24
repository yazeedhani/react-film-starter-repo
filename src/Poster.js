import React, { Component } from "react";

export default class Poster extends Component
{
    render()
    {
        return(
            <img src={"https://image.tmdb.org" + this.props.url} alt="" />
        )
    }
}
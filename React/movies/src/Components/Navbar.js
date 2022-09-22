import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return(
        <div className="bg-success text-light"
            style={{display: "flex", padding: ".5rem", alignItems: "center", justifyContent: "space-between"}}
        >
            <h1 className="display-5 nav" style={{marginLeft: "3em"}}>Movies App</h1>
            <h2 className="display-5 nav" style={{marginLeft: "2em", marginRight:"3em"}}>Favourites</h2>
        </div>
    )
  }
}

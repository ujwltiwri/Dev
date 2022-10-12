import React, { Component } from "react";
// import {movies} from "./getMovies"
import axios from "axios";
export default class List extends Component {
  constructor() {
    //console.log("Constructor is Called");
    super();
    this.state = {
      hover: "",
      movies: [],
      currPage: 1,
      favourites: JSON.parse(localStorage.getItem("movies")) || [],
    };
  }

  handleEnter = (id) => {
    this.setState({
      hover: id,
    });
  };

  handleLeave = () => {
    this.setState({
      hover: "",
    });
  };

  async componentDidMount() {
    let data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=f060fa0e9f765c858800f34492b77418&language=en-US&page=1"
    );

    this.setState({
      movies: [...data.data.results],
    });
  }

  async getUpdatedMovies() {
    //console.log("Get Updated Movies is Called");
    let data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=f060fa0e9f765c858800f34492b77418&language=en-US&page=${this.state.currPage}`
    );
    this.setState({
      movies: [...data.data.results],
    });
  }

  handleNextPage = () => {
    this.setState(
      {
        currPage: this.state.currPage + 1,
      },
      this.getUpdatedMovies
    );
  };

  handlePrevPage = () => {
    if (this.state.currPage > 1) {
      this.setState(
        { currPage: this.state.currPage - 1 },
        this.getUpdatedMovies
      );
    }
  };

  handleFavourites = (movieObj) => {
    let favouriteMovies = JSON.parse(localStorage.getItem("movies")) || [];
    if (!this.state.favourites.includes(movieObj.id)) {
      //add the movie to fav movies array
      favouriteMovies.push(movieObj);
    } else {
      //remove the movie from fav movies array
      favouriteMovies = favouriteMovies.filter(
        (movie) => movie.id !== movieObj.id
      );
    }

    localStorage.setItem("movies", JSON.stringify(favouriteMovies));
    let movieID = favouriteMovies.map((movieObj) => movieObj.id);
    this.setState({
      favourites: [...movieID],
    });

    console.log(movieID);
  };

  render() {
    //console.log("render is called");
    return (
      <>
        {this.state.movies.length == 0 ? (
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <h1
              className="title display-5"
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              Trending
            </h1>
            <div className="movies-list">
              {this.state.movies.map((movieObj) => {
                return (
                  <>
                    <div
                      className="card movie-card"
                      onMouseEnter={() => this.handleEnter(movieObj.id)}
                      onMouseLeave={this.handleLeave}
                      key={movieObj.id}
                    >
                      <img
                        className="card-img-top movie-img"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt="..."
                      />
                      <p className="card-title movie-title lead">
                        {movieObj.title}
                      </p>
                      {this.state.hover == movieObj.id && ( //Short Curcuiting for evaluation
                        <div className="button-wrapper">
                          <a
                            className="btn btn-danger favourite"
                            // href="#"
                            onClick={() => this.handleFavourites(movieObj)}
                          >
                            {/* Add to Favourites */}
                            {this.state.favourites.includes(movieObj.id)
                              ? `Remove From Favourites`
                              : `Add to Favourites`}
                          </a>
                        </div>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
            {/* Pagination */}
            <nav aria-label="...">
              <ul className="pagination">
                <li
                  className="page-item disabled"
                  onClick={this.handlePrevPage}
                >
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    {this.state.currPage}
                    <span className="visually-hidden">{this.currPage}</span>
                  </a>
                </li>
                <li className="page-item" onClick={this.handleNextPage}>
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </>
    );
  }
}

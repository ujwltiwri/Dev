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
      fav: [],
    };

    this.favouriteMovies = [];
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
    //console.log("CDM Is Called");
    //Using Fetch
    // let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f060fa0e9f765c858800f34492b77418&language=en-US&page=1")
    // let data = await res.json();

    //Using Axios
    let data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=f060fa0e9f765c858800f34492b77418&language=en-US&page=1"
    );
    ////console.log(data.data);

    this.setState({
      movies: [...data.data.results],
    });
  }

  // componentDidUpdate = () => {
  //   //console.log("CDU is Called");
  // }

  async getUpdatedMovies() {
    //console.log("Get Updated Movies is Called");
    let data = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=f060fa0e9f765c858800f34492b77418&language=en-US&page=${this.state.currPage}`
    );
    //console.log(data);
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

  // handleFavourites = (id) => {
  //   //if id is already present then remove it -> else add the id in fav array\
  //   if (!this.state.fav.includes(id)) {
  //     this.state.fav.push(id);
  //   } else {
  //     let idx = this.state.fav.indexOf(id);
  //     this.state.fav.splice(idx, 1);
  //   }

  //   console.log(this.state.fav);
  // };

  handleFavourites = (movieObj) => {
    if (this.favouriteMovies.includes(movieObj.id)) {
      //if id already present -> remove
      this.favouriteMovies = this.favouriteMovies.filter(
        (movie) => movie.id !== movieObj.id
      );
    } else {
      this.favouriteMovies.push(movieObj);
    }

    let tempData = this.favouriteMovies.map((movieObj) => movieObj.id);

    this.setState({
      fav: [...tempData],
    });
  };

  render() {
    //console.log("render is called");
    console.log(this.favouriteMovies);
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
                            href="#"
                            onClick={() => this.handleFavourites(movieObj)}
                          >
                            Add to Favourites
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

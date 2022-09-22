import React, { Component } from "react";
import axios from "axios";
import Navbar_Bootstrap from "./Navbar_Bootstrap";
export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      genre: [],
      currGenre: "All Genre",
    };
  }

  showPopup = () => {
    document.querySelector(".popup").style.opacity = 1;
    setTimeout(() => {
      document.querySelector(".popup").style.opacity = 0;
    }, 2000);
  };

  async componentDidMount() {
    // console.log("CDM Is Called");
    //Using Fetch
    // let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f060fa0e9f765c858800f34492b77418&language=en-US&page=1")
    // let data = await res.json();

    //Using Axios
    let data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=f060fa0e9f765c858800f34492b77418&language=en-US&page=1"
    );
    // console.log(data.data);

    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let allGenre = [];
    data.data.results.map((movieObj) => {
      if (!allGenre.includes(genreId[movieObj.genre_ids[0]])) {
        allGenre.push(genreId[movieObj.genre_ids[0]]);
      }
    });
    allGenre.unshift("All Genre");

    // allGenre = data.data.results.filter((movieObj) => {
    //   if (!allGenre.includes(genreId[movieObj.genre_ids[0]])) {
    //     return genreId[movieObj.genre_ids[0]];
    //   }
    // });

    // console.log(allGenre);

    this.setState({
      movies: [...data.data.results],
      genre: [...allGenre],
    });
  }

  handleGenre = (e) => {
    let genre = e.target.innerHTML;
    this.setState({
      currGenre: genre,
    });
  };

  render() {
    let genreId = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    return (
      <>
        <Navbar_Bootstrap />
        <div className="popup btn btn-danger">Movie Successfully Deleted</div>
        <div className="container-fluid p-5">
          <div className="row mt-3">
            <div className="list-group list-group-light col-md-3">
              {this.state.genre.map((genreName) => {
                return genreName == this.state.currGenre ? (
                  <a
                    href="#"
                    className="list-group-item list-group-item-action px-3 border-0 active"
                  >
                    {this.state.currGenre}
                    {/* {genreName} */}
                  </a>
                ) : (
                  <a
                    href="#"
                    className="list-group-item list-group-item-action px-3 border-0"
                    onClick={this.handleGenre}
                  >
                    {genreName}
                  </a>
                );
              })}
            </div>
            <li className="col-md-1" style={{ listStyleType: "none" }}></li>
            <div className="col-md-8 table-responsive">
              <div className="search mb-4 row">
                <div class="input-group col-auto">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" class="btn btn-outline-primary">
                    search
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    className="form-control col-auto"
                    type="text"
                    name=""
                    value="5"
                  />
                </div>
              </div>
              <table className="table table-striped table-hover table-bordered table-responsive">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Rating</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.movies.map((movieObj) => {
                    return (
                      <tr key={movieObj.id}>
                        <td>
                          <img
                            src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                            style={{ width: "8rem", marginRight: "20px" }}
                          />
                          {movieObj.title}
                        </td>
                        <td>{genreId[movieObj.genre_ids[0]]}</td>
                        <td>{movieObj.vote_count}</td>
                        <td>{movieObj.vote_average}</td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            data-mdb-ripple-color="dark"
                            onClick={this.showPopup}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

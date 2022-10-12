import React, { Component } from "react";
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
export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      movies: JSON.parse(localStorage.getItem("movies")),
      genre: [],
      currGenre: "All Genre",
      searchKey: "",
      // filteredMovies: JSON.parse(localStorage.getItem("movies")),
    };
  }

  async componentDidMount() {
    // let data = await axios.get(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=f060fa0e9f765c858800f34492b77418&language=en-US&page=1"
    // );

    // let genreId = {
    //   28: "Action",
    //   12: "Adventure",
    //   16: "Animation",
    //   35: "Comedy",
    //   80: "Crime",
    //   99: "Documentary",
    //   18: "Drama",
    //   10751: "Family",
    //   14: "Fantasy",
    //   36: "History",
    //   27: "Horror",
    //   10402: "Music",
    //   9648: "Mystery",
    //   10749: "Romance",
    //   878: "Sci-Fi",
    //   10770: "TV",
    //   53: "Thriller",
    //   10752: "War",
    //   37: "Western",
    // };

    let allGenre = [];
    this.state.movies.map((movieObj) => {
      if (!allGenre.includes(genreId[movieObj.genre_ids[0]])) {
        allGenre.push(genreId[movieObj.genre_ids[0]]);
      }
    });
    allGenre.unshift("All Genre");

    this.setState({
      // movies: [...data.data.results],
      genre: [...allGenre],
    });
  }

  handleGenre = (e) => {
    let genre = e.target.innerHTML;
    this.setState({
      currGenre: genre,
    });
  };

  handleSearch = (e) => {
    this.setState({
      searchKey: e.target.value,
    });
  };

  handleDelete = (id) => {
    //Popup Code
    document.querySelector(".popup").style.opacity = 1;
    setTimeout(() => {
      document.querySelector(".popup").style.opacity = 0;
    }, 2000);

    //Delete Function
    let deletedArr = this.state.movies.filter((movieObj) => movieObj.id !== id);
    localStorage.setItem("movies", JSON.stringify(deletedArr));
    this.setState({
      movies: [...deletedArr],
    });
  };

  render() {
    let filteredMovies = this.state.movies;
    //Handle Search
    if (this.state.searchKey !== "") {
      filteredMovies = this.state.movies.filter((movieObj) =>
        movieObj.title.toLowerCase().includes(this.state.searchKey)
      );
    }

    //Handle Genre
    if (this.state.currGenre !== "All Genre") {
      filteredMovies = filteredMovies.filter(
        (movieObj) => genreId[movieObj.genre_ids[0]] == this.state.currGenre
      );
    }

    return (
      <>
        <div className="popup btn btn-danger">Movie Successfully Deleted</div>
        <div className="container-fluid p-5">
          <div className="row mt-3">
            <div className="list-group list-group-light col-md-3">
              {this.state.genre.map((genreName, idx) => {
                return genreName == this.state.currGenre ? (
                  <a
                    href="#"
                    className="list-group-item list-group-item-action px-3 border-0 active"
                    key={idx}
                  >
                    {this.state.currGenre}
                    {/* {genreName} */}
                  </a>
                ) : (
                  <a
                    href="#"
                    className="list-group-item list-group-item-action px-3 border-0"
                    onClick={this.handleGenre}
                    key={idx}
                  >
                    {genreName}
                  </a>
                );
              })}
            </div>
            <li className="col-md-1" style={{ listStyleType: "none" }}></li>
            <div className="col-md-8 table-responsive">
              <div className="search mb-4 row">
                <div className="input-group col-auto">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    onChange={this.handleSearch}
                  />
                  <button type="button" className="btn btn-outline-primary">
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
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Rating</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMovies.map((movieObj, idx) => {
                    return (
                      <tr key={movieObj.id}>
                        <td>{idx + 1}</td>
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
                            onClick={() => this.handleDelete(movieObj.id)}
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

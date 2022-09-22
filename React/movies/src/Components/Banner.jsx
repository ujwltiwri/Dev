import axios from 'axios';
import React, { Component } from 'react'

export default class Banner extends Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }

 async componentDidMount(){
    let data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=2")

    this.setState({
      movies: [...data.data.results]
    })
  }

  render() {
    return (
      <>
        {this.state.movies.length == 0 ? (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className='card-banner-card'>
            <img className='banner-img' src={`https://image.tmdb.org/t/p/original/${this.state.movies[0].backdrop_path}`} alt="" />
            <p className='display-5 banner-title text-light'> {this.state.movies[0].original_title}</p>
            <p className='display-4 banner-text text-light'>{this.state.movies[0].overview}</p>
          </div>
        )}
      </>
    )
  }
}

import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
    <img src={movie.posterURL} alt={movie.title} />
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movies/${encodeURIComponent(movie.title)}`}>View Details</Link>
    </div>
    </div>
  );
};

export default MovieCard;

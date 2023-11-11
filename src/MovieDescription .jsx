import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => encodeURIComponent(m.title) === title);

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe title="trailer" width="560" height="315" src={movie.trailerLink} frameborder="0" allowfullscreen></iframe>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default MovieDescription;

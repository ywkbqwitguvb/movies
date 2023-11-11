import React, { useState } from 'react';
import MovieList from './Component/MovieList';
import Filter from './Component/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Top Boys',
      description: 'A mind-bending movie about dreams within dreams.',
      posterURL: 'data:image/jpeg;base64,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',
      rating: 4.8,
      trailerLink: 'https://www.youtube.com/embed/example-trailer',
    },
  
  ]);

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  const handleFilter = ({ title, rate }) => {
  
    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (!rate || movie.rating.toString() === rate)
    );

    setMovies(filteredMovies);
  };

  return (
    <div className="app">
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: e.target.value })
          }
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
    </div>
  );
};

export default App;

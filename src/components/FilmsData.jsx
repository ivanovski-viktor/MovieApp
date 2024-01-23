import React, { useEffect, useState } from "react";

const FilmsData = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Assuming movies.json is in the public folder
    fetch("../src/data/Film.JSON")
      .then((response) => response.json())
      .then((data) => {
        // Process the data to include only the required fields
        const processedData = data.map((movie) => ({
          title: movie.Title,
          year: movie.Year,
          rated: movie.Rated,
          released: movie.Released,
          genre: movie.Genre,
          runtime: movie.Runtime,
          writer: movie.Writer,
          plot: movie.Plot,
          imdbRating: movie.imdbRating,
          imdbVotes: movie.imdbVotes,
          image: movie.Image,
        }));

        setMovies(processedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>Year: {movie.year}</p>
            <p>Rated: {movie.rated}</p>
            <p>Released: {movie.released}</p>
            <p>Genre: {movie.genre}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>Writer: {movie.writer}</p>
            <p>Plot: {movie.plot}</p>
            <p>IMDb Rating: {movie.imdbRating}</p>
            <p>IMDb Votes: {movie.imdbVotes}</p>
            {movie.image && (
              <img
                style={{ width: "200px" }}
                src={movie.image}
                alt={`${movie.title} Poster`}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmsData;

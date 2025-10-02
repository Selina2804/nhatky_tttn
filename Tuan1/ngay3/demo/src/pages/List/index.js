import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { PiFilmSlateFill } from "react-icons/pi";

const dummyMovies = [
  { id: 1, title: "Avengers: Endgame", year: 2019 },
  { id: 2, title: "Spider-Man: No Way Home", year: 2021 },
  { id: 3, title: "Inception", year: 2010 },
  
];

const List = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = dummyMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list-container">
      <h1 className="list-title">Danh sách phim</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Tìm phim..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredMovies.length > 0 ? (
        <div className="movies-list">
          {filteredMovies.map(movie => (
            <Link to={`/detail/${movie.id}`} key={movie.id} className="movie-item">
              <span className="movie-icon"><PiFilmSlateFill /></span>
              <div>
                <h3>{movie.title}</h3>
                <p>Năm: {movie.year}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Không tìm thấy phim nào.</p>
      )}
    </div>
  );
};

export default List;

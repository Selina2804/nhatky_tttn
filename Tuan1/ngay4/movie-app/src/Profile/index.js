import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Profile() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/movies");
      setMovies(res.data);
    } catch (err) {
      console.error("Lỗi khi lấy phim:", err);
      setMovies([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredMovies = movies.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="profile">
      <div className="card movie-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm phim..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        <h2>Danh sách phim</h2>
        <div className="movie-list">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="movie-card loading-card">
                    Đang tải...
                  </div>
                ))
            : filteredMovies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <Link to={`/thong-tin/${movie.id}`}>
                    <img
                      src={
                        movie.poster
                          ? movie.poster
                          : "https://via.placeholder.com/200x270?text=No+Image"
                      }
                      alt={movie.title}
                    />
                    <h3>{movie.title}</h3>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;

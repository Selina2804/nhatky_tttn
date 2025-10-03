import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/movies/${id}`);
        setMovie(res.data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết phim:", error);
        setMovie(null);
      }
      setLoading(false);
    };
    fetchMovieDetail();
  }, [id]);

  if (loading) {
    return (
      <section className="detail">
        <div className="detail-wrapper">
          <div className="detail-card loading-card">
            Đang tải chi tiết phim...
          </div>
        </div>
      </section>
    );
  }

  if (!movie) {
    return (
      <section className="detail">
        <div className="detail-wrapper">
          <div className="detail-card loading-card">
            Không tìm thấy phim!
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="detail">
      <div className="detail-wrapper">
        <div className="detail-card">
          {/* Poster */}
          <img
            src={
              movie.poster
                ? movie.poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.title}
            className="detail-poster"
          />

          {/* Thông tin */}
          <div className="detail-info">
            <h1>{movie.title}</h1>
            <p>{movie.desc || "Không có mô tả"}</p>

            {/* Nút xem ngay */}
            <button className="btn-watch">▶ Xem ngay</button>
            <br />

            {/* Link quay lại danh sách */}
            <Link to="/danh-sach" className="btn-back">
              ← Quay lại danh sách
            </Link>

            {/* Video luôn hiển thị cuối cùng */}
            {movie.video && (
             <video src={movie.video} controls width="100%" style={{ marginTop: "16px", borderRadius: "8px" }} />

            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;

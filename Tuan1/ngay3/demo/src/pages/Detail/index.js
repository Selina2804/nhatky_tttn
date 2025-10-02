import { useParams } from "react-router-dom";
import "./style.css"
const dummyMovies = [
  { id: 1, title: "Avengers: Endgame", year: 2019, description: "Siêu anh hùng tập hợp để chiến đấu với Thanos." },
  { id: 2, title: "Spider-Man: No Way Home", year: 2021, description: "Peter Parker đối mặt với đa vũ trụ và nhiều kẻ thù." },
  { id: 3, title: "Inception", year: 2010, description: "Một kẻ đánh cắp ký ức thông qua giấc mơ." },
];

const Detail = () => {
  const { id } = useParams();
  const movie = dummyMovies.find(m => m.id === parseInt(id));

  if (!movie) return <h2 style={{ textAlign: "center", marginTop: 50 }}>Không tìm thấy phim.</h2>;

  return (
    <div className="detail-container">
      <h2 className="detail-title">{movie.title}</h2>
      <p className="detail-year">Năm sản xuất: <strong>{movie.year}</strong></p>
      <p className="detail-description">{movie.description}</p>
    </div>
  );
};

export default Detail;

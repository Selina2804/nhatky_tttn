const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

let movies = [
  { 
    id: 1, 
    title: "Avengers: Endgame", 
    poster: "https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    desc: "Biệt đội Avengers cùng nhau chống lại Thanos để cứu vũ trụ.",
    video: "/aven.mp4"   
  },
  { 
    id: 2, 
    title: "Free Guy", 
    poster: "https://image.tmdb.org/t/p/w200/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    desc: "Một nhân vật phụ trong game trở thành anh hùng khi phát hiện ra sự thật.",
    video: "/freeg.mp4"  
  },
];


app.get("/movies", (req, res) => res.json(movies));

app.get("/movies/:id", (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: "Không tìm thấy phim" });
  res.json(movie);
});

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});

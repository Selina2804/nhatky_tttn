import React from "react";
import "./style.css"; 

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero">
        <h1 className="home-title">Chào mừng đến Website của Tôi</h1>
        <p className="home-subtitle">
          Tui sẽ chia sẽ những thử mà tui đã trải nghiệm thực tập trong Tuần 1
        </p>
      </div>

      <div className="home-content">
        <h2>Các nội dung</h2>
        <ul className="post-list">
          <li className="post-preview">
            <h3>1. JavaScript ES6+</h3>
            <p>let/const, arrow function, template literals, destructuring, rest/spread, import/export, classes, modules, promises</p>
            <h4>Khó khăn gặp phải: </h4>
            <p>Còn chưa nắm vững được, đang cố gắng xem bài giản youtube và thực hiện</p>
          </li>
          <li className="post-preview">
            <h3>2. React Router DOM</h3>
            <p>Ôn cơ bản về useState, useEffect, useContext,...</p>
            <h4>Khó khăn gặp phải: </h4>
            <p>Còn hơi chậm và đang tiếp thu nhiều hơn</p>
          </li>
          <li className="post-preview">
            <h3>3. Làm Ứng dụng với React Hook</h3>
            <p>Tui đã thực hiện một demo đưa thông tin</p>
              <h4>Khó khăn gặp phải: </h4>
            <p>Không quen và dang cố gắng ôn tập thật</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

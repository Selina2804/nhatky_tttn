import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Không tìm thấy trang bạn yêu cầu.</p>
      <Link to="/" className="back-home">← Quay về trang chủ</Link>
    </div>
  );
};

export default NotFound;

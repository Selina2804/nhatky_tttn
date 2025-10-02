import React from "react";
import "./style.css";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>Về tôi</h1>
        <p>
          Xin chào! Tôi tên là <strong>Đào Hoàng Tú</strong> là sinh viên năm 3, trường ĐH Nguyễn Tất Thành <br/>

         Tôi theo đang học CNTT  chuyên ngành Kỹ thuật CNTT. Đang định hướng theo mảng Front-End Developer
        </p>
        <p>
          Mình tạo blog này để ghi lại hành trình học tập và chia sẻ những kiến thức mình tìm hiểu
          được trong quá trình học lập trình web, đặc biệt là các công nghệ như React, JavaScript,
          HTML và CSS.
        </p>
        <p>
          Mục tiêu của mình là trở thành một lập trình viên chuyên nghiệp và đóng góp giá trị cho cộng đồng công nghệ Việt Nam.
        </p>
        <hr />
        <p><IoMailOutline /> Email: daohoangtu789@gmail.com</p>
        <p><FaGithub /> Github: <a href="https://github.com/Selina2804" target="_blank" rel="noreferrer">github.com/Selina2804</a></p>
      </div>
    </div>
  );
};

export default About;

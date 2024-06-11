import React from "react";
import "../css/app.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <h1>안녕하세요~!</h1>
      <Link to="/write">작성하기</Link>
      <Link to="/board">게시판</Link>
    </div>
  );
};

export default Home;

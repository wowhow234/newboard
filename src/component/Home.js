import React from "react";
import "../css/home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <h1>안녕하세요~!</h1>
      <div className="Link1">
        <span>
          <Link to="/write">작성하기</Link>
        </span>
        <span>
          <Link to="/board">게시판</Link>
        </span>
      </div>
    </div>
  );
};

export default Home;

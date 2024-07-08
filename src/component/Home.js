import React from "react";
import "../css/home.css";

import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white",
  margin: "1rem",
};

const Home = () => {
  return (
    <div className="wrapper">
      <h1>간단한 방명록을 남겨보세요!</h1>
      <div className="Link1">
        <button>
          <Link to="/write" style={linkStyle}>
            작성하기
          </Link>
        </button>
        <button>
          <Link to="/board" style={linkStyle}>
            글 목록
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;

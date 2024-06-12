import React, { useState, useEffect } from "react";
import "../css/board.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Board = () => {
  const [board, setBoard] = useState([]);

  const getBoardList = async () => {
    await axios
      .get("http://localhost:4000/board")
      .then((response) => {
        console.log("response----->", response);
        setBoard(response.data);
        // console.log("board----->", board)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBoardList();
    // axios.get("/db/data.json")
    // .then((response) => {
    //   console.log(response);
    //   setBoard(response.data);
    //   console.log("board---->", board)
    // })
    // .catch((err) => console.log(err));
  }, []);

  return (
    <div className="boardwrapper">
      <h3>게시글 내용</h3>
      <Link to={"/"}>메인으로</Link>
      {board.map((item) => {
        return (
          <div key={item.id}>
            <span>게시글번호 : {item.id}</span>
            <Link to={`/board/${item.id}`}>{item.datatitle}</Link>
            <span>작성자 : {item.dataname}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Board;

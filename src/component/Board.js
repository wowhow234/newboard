import React, { useState, useEffect } from "react";
import "../css/board.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const Board = () => {
  const [board, setBoard] = useState([]);

  const getBoardList = async () => {
    await axios
      .get("http://localhost:4000/board")
      .then((response) => {
        // console.log("response----->", response);
        setBoard(response.data);
        // console.log("board----->", board)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div className="boardwrapper">
      <div className="Link2">
        <Link to={"/"}>
          <span>메인으로</span>
        </Link>
      </div>
      <table className="board-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {board.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <span>{item.id}</span>
                </td>
                <td>
                  <Link to={`/board/${item.id}`}>{item.datatitle}</Link>
                </td>
                <td>
                  <span>{item.dataname}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Board;

import React, { useState, useEffect } from "react";
import "../css/board.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import BoardTable from "./BoardTable";

const Board = () => {
  const [board, setBoard] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 시작하는 현재 페이지 1
  const [boardPerPage, setBoardPerPage] = useState(6); // 한 페이지에 보여지는 게시글 갯수 6

  const getBoardList = async () => {
    await axios
      .get("http://localhost:4000/board", {
        params: {
          _limit: 6,
          _page: currentPage,
        },
      })
      .then((response) => {
        // console.log("response----->", response);
        // console.log("response.data : ", response.data);
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
          <BoardTable board={board} />
        </tbody>
      </table>
      <Pagination
        boardsNum={board.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        boardPerPage={boardPerPage}
      />
    </div>
  );
};

export default Board;

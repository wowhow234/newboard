import React, { useState, useEffect } from "react";
import "../css/board.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import BoardTable from "./BoardTable";

const boardlinkStyle = {
  textDecoration: "none",
  color: "green",
};

const Board = () => {
  const [board, setBoard] = useState([]); // data가 담긴 값
  const [currentPage, setCurrentPage] = useState(1); // 시작하는 현재 페이지 1
  const boardPerPage = 5; // 한 페이지에 보여지는 게시글 갯수 5

  const sliceStartIndex = (currentPage - 1) * boardPerPage;
  const sliceEndIndex = boardPerPage * currentPage;

  const getBoardList = async () => {
    await axios
      .get("http://localhost:4000/board", {})
      .then((response) => {
        // console.log("response----->", response);
        setBoard(response.data);
        // console.log("board----->", board)
      })
      .catch((err) => console.log(err));
  };

  // const slicedData = response.data.slice(sliceStartIndex, sliceEndIndex);

  // 한 페이지당 5개씩 자르는 함수
  const fiveBoards = (board) => {
    if (board) {
      const result = board.slice(sliceStartIndex, sliceEndIndex);
      // console.log("slicedDatatest----> : ", result);
      return result;
    }
  };

  useEffect(() => {
    getBoardList();
  }, []);

  return (
    <div className="boardwrapper">
      <div className="Link2">
        <Link to={"/"} style={boardlinkStyle}>
          <span>메인화면으로</span>
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
          <BoardTable board={fiveBoards(board)} />
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

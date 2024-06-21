import React from "react";
import "../css/board.css";
import { Link } from "react-router-dom";

const BoardTable = ({ board }) => {
  return (
    <>
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
    </>
  );
};

export default BoardTable;

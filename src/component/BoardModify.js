import React, { useState } from "react";
import BoardWrite from "./BoardWrite";
import { useLocation, useParams } from "react-router-dom";

const BoardModify = () => {
  const id = useParams();

  const [modifyInputs, setModifyInputs] = useState({
    nickname: "",
    password: "",
    title: "",
    content: "",
  });

  const location = useLocation();
  const from = location.state;
  console.log("link state----->", from);

  return (
    <div>
      수정게시판 ㅇㅇㅇㅇㅇㅇ
      <BoardWrite />
    </div>
  );
};

export default BoardModify;

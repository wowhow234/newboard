import React, { useState } from "react";
import BoardWrite from "./BoardWrite";
import { useLocation, useParams } from "react-router-dom";
import BoardForm from "./BoardForm";

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
  console.log("location console----->", location);

  const onChangeModify = () => {
    console.log("수정폼ㅇㅇㅇ");
  };

  return (
    <div>
      수정게시판 ㅇㅇㅇㅇㅇㅇ
      <BoardForm />
    </div>
  );
};

export default BoardModify;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/userform.css";
import { useNavigate } from "react-router-dom";
import BoardForm from "./BoardForm";

const BoardWrite = () => {
  const [inputs, setInputs] = useState({
    nickname: "",
    password: "",
    title: "",
    content: "",
  });

  const navigate = useNavigate();
  const { nickname, password, title, content } = inputs; // 비구조화 할당

  const onChangeInput = (e) => {
    const { value, name } = e.target; // e.target 에서 name과 value 만 가져오기
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log("onChange되나..", e.target.value);
  };

  useEffect(() => {
    console.log("🍪🍪🍪🍪inputs----->", inputs);
  }, [inputs]);

  const onSubmitForm = (e) => {
    axios
      .post("http://localhost:4000/board", {
        dataname: nickname,
        datatitle: title,
        datacontent: content,
        datapw: password,
      })
      .then((res) => {
        console.log("post응답--->", res);
        navigate("/board");
      })
      .catch((err) => console.log("에러발생 ㅠㅠ----", err));
    alert("제출 완료");
    e.preventDefault();
    console.log("-----제출완료----", inputs);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <BoardForm inputs={inputs} handleInputChange={onChangeInput} />
      </form>
    </>
  );
};

export default BoardWrite;

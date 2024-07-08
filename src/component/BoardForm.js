import React from "react";
import Input from "./Input";
import "../css/form.css";

const BoardForm = ({ handleInputChange, inputs }) => {
  const { nickname, password, title, content } = inputs; // 비구조화 할당
  const onChageInput = handleInputChange; // Input 컴포넌트 전달용

  const INPUT_DATA = [
    { label: "닉네임", type: "text", name: "nickname", value: nickname },
    { label: "비밀번호", type: "password", name: "password", value: password },
    { label: "제목", type: "text", name: "title", value: title },
    { label: "글 내용", type: "text", name: "content", value: content },
  ];

  return (
    <div className="writeform">
      {INPUT_DATA.map((item, id) => (
        <Input
          key={id}
          label={item.label}
          Itype={item.type}
          Iname={item.name}
          Ivalue={item.value}
          IonChange={handleInputChange}
        />
      ))}
      <button type="button">등록하기</button>
    </div>
  );
};

export default BoardForm;

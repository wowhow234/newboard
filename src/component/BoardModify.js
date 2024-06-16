import React, { useEffect, useState } from "react";
import BoardWrite from "./BoardWrite";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Input from "./Input";
import axios from "axios";

const BoardModify = () => {
  const id = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const locationState = useLocation().state;
  // const from = location.state;
  // console.log("link state----->", from);
  // console.log("location으로 받은 state----->", locationState); // useEffect로 옮김

  // location hook 으로 받아온 인자들을 useState로 담기 위함
  const [modifyInputs, setModifyInputs] = useState({
    Mnickname: locationState.toM_nickname,
    Mpassword: locationState.toM_pw,
    Mtitle: locationState.toM_title,
    Mcontent: locationState.toM_content,
    Mid: locationState.toM_id,
  });

  // 담은거 꺼내기
  const { Mnickname, Mpassword, Mtitle, Mcontent, Mid } = modifyInputs;
  // console.log("📥State확인하기----->", modifyInputs); // useEffect로 옮김

  //-----------------------------------------------------------------

  // Input 수정 실행여부 확인 이벤트
  const onChangeModifyInput = (e) => {
    const { value, name } = e.target; // e.target 에서 name과 value 만 가져오기
    setModifyInputs({
      ...modifyInputs,
      [name]: value,
    });
    console.log("e.target.value(onChange)-----", e.target.value);
    // console.log("e.target.name??----->", e.target.name);
    console.log("e.target찍어보기----->", e.target);
  };

  const LOCATION_INPUT_DATA = [
    {
      label: "닉네임",
      type: "text",
      name: "Mnickname",
      value: Mnickname,
    },
    {
      label: "비밀번호",
      type: "password",
      name: "Mpassword",
      value: Mpassword,
    },
    { label: "제목", type: "text", name: "Mtitle", value: Mtitle },
    {
      label: "글 내용",
      type: "text",
      name: "Mcontent",
      value: Mcontent,
    },
  ];

  //-------------------------------------------------------
  useEffect(() => {
    // console.log("location으로 받은 state----->", locationState); // 최초 렌더링 때 실행
    // console.log("📥State확인하기----->", modifyInputs); // 최초 렌더링 때 실행
    console.log("🍪🍪🍪🍪인풋값변경되는지-----", modifyInputs);
  }, [modifyInputs]); // 의존성 배열은 빈 값으로 하면 location, modifyIpunts 콘솔은 최초 실행됨.

  const onSubmitModifyForm = (e) => {
    setModifyInputs(modifyInputs);
    e.preventDefault();
    console.log("📫-------폼 제출 확인-------", modifyInputs);
  };

  return (
    <>
      <form onSubmit={onSubmitModifyForm}>
        수정게시판 ㅇㅇㅇㅇㅇㅇ
        {LOCATION_INPUT_DATA.map((item, i) => (
          <div key={i}>
            <label>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              defaultValue={item.value}
              key={item.value}
              onChange={onChangeModifyInput}
              required
            />
          </div>
          // <Input
          //   key={id}
          //   label={item.label}
          //   Itype={item.type}
          //   Iname={item.name}
          //   Mvalue={item.value}
          //   IonChange={onChangeModifyInput}
          // />
        ))}
        <button>수정 완료하기</button>
        <button onClick={goBack}>이전으로</button>
      </form>
    </>
  );
};

export default BoardModify;

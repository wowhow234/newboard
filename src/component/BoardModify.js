import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BoardModify = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const locationState = useLocation().state;

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

  //-----------------------------------------------------------------

  // Input 수정 실행여부 확인 이벤트
  const onChangeModifyInput = (e) => {
    const { value, name } = e.target; // e.target 에서 name과 value 만 가져오기
    setModifyInputs({
      ...modifyInputs,
      [name]: value,
    });
    // console.log("e.target.value(onChange)-----", e.target.value);
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
    console.log("input values-----", modifyInputs);
  }, [modifyInputs]); // 의존성 배열은 빈 값으로 하면 location, modifyIpunts 콘솔은 최초 실행됨.

  const onSubmitModifyForm = (e) => {
    axios
      .patch(`http://localhost:4000/board/${Mid}`, {
        dataname: Mnickname,
        datatitle: Mtitle,
        datacontent: Mcontent,
        datapw: Mpassword,
      })
      .then((res) => {
        console.log("patch 응답---->", res);
        navigate("/board");
      })
      .catch((err) => console.log("-----ERROR----", err));
    setModifyInputs(modifyInputs);
    e.preventDefault();
    console.log("📫-------폼 제출 확인-------", modifyInputs);
  };

  return (
    <>
      <form onSubmit={onSubmitModifyForm}>
        {LOCATION_INPUT_DATA.map((item, i) => (
          <div key={i}>
            <label>{item.label}</label>
            <input
              type={item.type}
              name={item.name}
              defaultValue={item.value}
              // key={item.value}
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
        <button>수정 완료</button>
        <button onClick={goBack}>이전으로</button>
      </form>
    </>
  );
};

export default BoardModify;

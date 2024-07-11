import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import "../css/form.css";

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
      type: "hidden",
    },
  ];

  //-------------------------------------------------------
  // useEffect(() => {
  // console.log("location으로 받은 state----->", locationState); // 최초 렌더링 때 실행
  //   console.log("input values-----", modifyInputs);
  // }, [modifyInputs]);
  // 의존성 배열은 빈 값으로 하면 location, modifyIpunts 콘솔은 최초 실행됨.

  const onSubmitModifyForm = (e) => {
    axios
      .patch(`http://localhost:4000/board/${Mid}`, {
        dataname: Mnickname,
        datatitle: Mtitle,
        datacontent: Mcontent,
        datapw: Mpassword,
      })
      .then((res) => {
        alert("수정하였습니다.");
        // console.log("patch 응답---->", res);
        navigate("/board");
      })
      .catch((err) => console.log(err));
    setModifyInputs(modifyInputs);
    e.preventDefault();
    // console.log("📫check submit form--", modifyInputs);
  };

  return (
    <>
      <button onClick={goBack} id="bw-back">
        이전으로
      </button>
      <form onSubmit={onSubmitModifyForm}>
        <div className="modifyform">
          {LOCATION_INPUT_DATA.map((item, i) => (
            <div key={i}>
              {/* <label>{item.label}</label>
            <input
            type={item.type}
            name={item.name}
            defaultValue={item.value}
            // key={item.value}
            onChange={onChangeModifyInput}
            required
            /> */}
              <Input
                key={i}
                label={item.label}
                Itype={item.type}
                Iname={item.name}
                Ivalue={item.value || ""}
                IonChange={onChangeModifyInput}
              />
            </div>
          ))}
          <textarea
            className="Mcontent"
            name="Mcontent"
            value={Mcontent}
            onChange={onChangeModifyInput}
            required
          ></textarea>
        </div>

        <button type="submit" className="M-submit">
          수정 완료
        </button>
      </form>
    </>
  );
};

export default BoardModify;

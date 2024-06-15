import React, { useEffect, useState } from "react";
import BoardWrite from "./BoardWrite";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Input from "./Input";

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

  const [modifyInputs, setModifyInputs] = useState({
    Mnickname: locationState.nickname,
    Mpassword: "",
    Mtitle: locationState.title,
    Mcontent: locationState.content,
    Mid: locationState.id,
  });

  // console.log("📥State확인하기----->", modifyInputs); // useEffect로 옮김

  //-----------------------------------------------------------------
  const [test, setTest] = useState({
    test1: "",
    test2: "",
    test3: "",
    test4: "",
  });
  const { test1, test2, test3, test4 } = test;

  const onChangeInput = (e) => {
    setTest(e.target.value);
    console.log("onChange 테스트 -----", e.target.value);
  };

  const LOCATION_INPUT_DATA = [
    { label: "닉네임", type: "text", name: "nickname", value: test1 },
    { label: "비밀번호", type: "password", name: "password", value: test2 },
    { label: "제목", type: "text", name: "title", value: test3 },
    { label: "글 내용", type: "text", name: "content", value: test4 },
  ];

  //-------------------------------------------------------
  useEffect(() => {
    // setModifyInputs(locationState);
    // console.log("setSTate확인하기----->", modifyInputs);
    console.log("location으로 받은 state----->", locationState); // 최초 렌더링 때 실행
    console.log("📥State확인하기----->", modifyInputs); // 최초 렌더링 때 실행
    console.log("------------test확인-------------", test); // test 안에 값이 바뀔 때 마다 콘솔 실행
  }, []); // 의존성 배열은 빈 값으로 하면 location, modifyIpunts 콘솔은 최초 실행됨.

  return (
    <>
      <form>
        수정게시판 ㅇㅇㅇㅇㅇㅇ
        {LOCATION_INPUT_DATA.map((item, id) => (
          <Input
            key={id}
            label={item.label}
            Itype={item.type}
            Iname={item.name}
            Ivalue={item.value}
            IonChange={onChangeInput}
          />
        ))}
        <button>수정하기</button>
        <button onClick={goBack}>이전으로</button>
      </form>
    </>
  );
};

export default BoardModify;

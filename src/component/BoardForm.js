import React from "react";
import Input from "./Input";

const BoardForm = ({ handleInputChange, inputs }) => {
  //     const [inputs, setInputs] = useState({
  //   nickname: "",
  //   password: "",
  //   title: "",
  //   content : "",
  //     })

  const { nickname, password, title, content } = inputs; // 비구조화 할당

  //   const onChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target; // e.target 에서 name과 value 만 가져오기
  //   setInputs({
  //     ...inputs,
  //     [name] : value,

  //   })
  //   console.log("onChange되나..", e.target.value)
  //   }

  // useEffect(() => {
  //   console.log("inputs----->", inputs)
  // }, [inputs])

  const onChageInput = handleInputChange; // Input 컴포넌트 전달용

  const INPUT_DATA = [
    { label: "닉네임", type: "text", name: "nickname", value: nickname },
    { label: "비밀번호", type: "password", name: "password", value: password },
    { label: "제목", type: "text", name: "title", value: title },
    { label: "글 내용", type: "text", name: "content", value: content },
  ];

  return (
    <div>
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
      {/* <label>닉네임</label>
      <input
        type="text"
        name="nickname"
        value={nickname}
        onChange={handleInputChange}
        required
      />
      <label>비밀번호</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        required
      />
      <label>제목</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleInputChange}
        required
      />
      <label>글 내용</label>
      <input
        type="text"
        name="content"
        value={content}
        onChange={handleInputChange}
        required
      /> */}
      <button>등록하기</button>
    </div>
  );
};

export default BoardForm;

import React from "react";

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

  return (
    <div>
      <label>닉네임</label>
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
      />
      <button>등록하기</button>
    </div>
  );
};

export default BoardForm;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/board.css";

const BoardDetail = () => {
  const { id } = useParams();

  const [boardDetail, setBoardDetail] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isDeletePw, setIsDeletePw] = useState();
  const [isDeleteFail, setIsDeleteFail] = useState(false);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // 게시글 상세 내용 불러오는 api
  useEffect(() => {
    axios
      .get(`http://localhost:4000/board/${id}`)
      .then((response) => {
        console.log("get요청한거 받아지나?----->", response.data);
        setBoardDetail(response.data);
        // console.log("boardDetail---->", boardDetail);
        // console.log("params----->", id);
      })
      .catch((err) => console.log(err));
    console.log("삭제pw--->", isDeletePw);
  }, [isDeletePw]);

  // 게시글 삭제하기
  const onClickDelete = (e) => {
    const dataPw = boardDetail.datapw;
    if (isDeletePw === dataPw) {
      setIsDelete(!isDelete);
      axios
        .delete(`http://localhost:4000/board/${id}`)
        .then((response) => {
          alert("삭제하였습니다.");
          navigate("/board");
          console.log("삭제성공----->", response);
        })
        .catch((err) => console.error(err));
    } else {
      setIsDeleteFail(true);
      console.error("에러발생", Error);
    }
  };

  const onChangeDelete = (e) => {
    setIsDeletePw(e.target.value);
    // console.log("삭제pw--->", isDeletePw);
  };

  return (
    <div>
      <h3>게시판 상세 내용</h3>
      <button onClick={goBack}>뒤로가기</button>
      {/* <BoardItem /> */}
      <div className="board-detail">
        <div className="d1">
          <span>작성자 : </span>
          <span>{boardDetail.dataname}</span>
        </div>
        <div className="d1">
          <span>제목 : </span>
          <span>{boardDetail.datatitle}</span>
        </div>
        <div className="d1">
          <span>내용</span>
          <div className="d-content">{boardDetail.datacontent}</div>
        </div>
        <div style={{ border: "1px solid black" }}>
          비밀번호를 입력하세요 :{" "}
          <input
            type="password"
            name="password"
            value={isDeletePw || ""}
            onChange={onChangeDelete}
          />
        </div>
        {isDeleteFail && (
          <div style={{ color: "red" }}>비밀번호가 틀렸습니다.</div>
        )}
        <div className="detail-button">
          <button onClick={onClickDelete}>삭제하기</button>
          <Link
            to={`/modify/${id}`}
            state={{
              toM_nickname: boardDetail.dataname,
              toM_title: boardDetail.datatitle,
              toM_content: boardDetail.datacontent,
              toM_id: boardDetail.id,
              toM_pw: boardDetail.datapw,
            }}
          >
            <button type="button">수정하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;

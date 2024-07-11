import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../css/board.css";

const BoardDetail = () => {
  const { id } = useParams();

  const [boardDetail, setBoardDetail] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isDeletePw, setIsDeletePw] = useState();
  const [isDeleteFail, setIsDeleteFail] = useState(false);
  const [isModifyPw, setIsModifyPw] = useState();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // 게시글 상세 내용 불러오는 api
  useEffect(() => {
    axios
      .get(`http://localhost:4000/board/${id}`)
      .then((response) => {
        // console.log("response----->", response.data);
        setBoardDetail(response.data);
        // console.log("boardDetail---->", boardDetail);
      })
      .catch((err) => console.err(err));
    // console.log("password--->", isDeletePw);
  }, [isDeletePw, id]);

  // 게시글 삭제하기
  const dataPw = boardDetail.datapw;
  const onClickDelete = (e) => {
    if (isDeletePw === dataPw) {
      setIsDelete(!isDelete);
      axios
        .delete(`http://localhost:4000/board/${id}`)
        .then((response) => {
          alert("삭제하였습니다.");
          navigate("/board");
          // console.log("삭제성공----->", response);
        })
        .catch((err) => console.error(err));
    } else {
      setIsDeleteFail(true);
    }
  };

  // 게시글 수정하기
  const onClickModify = () => {
    if (isDeletePw === dataPw) {
      setIsModifyPw(!isModifyPw);
      navigate(`/modify/${id}`, {
        state: {
          toM_nickname: boardDetail.dataname,
          toM_title: boardDetail.datatitle,
          toM_content: boardDetail.datacontent,
          toM_id: boardDetail.id,
          toM_pw: boardDetail.datapw,
        },
      });
    } else if (isDeletePw === undefined) {
      alert("비밀번호를 입력하세요.");
    } else {
      setIsModifyPw(false);
      alert("비밀번호가 틀렸습니다.");
    }
  };
  const onChangeDelete = (e) => {
    setIsDeletePw(e.target.value);
  };

  return (
    <div>
      <button onClick={goBack} id="bw-back">
        뒤로가기
      </button>
      <div className="board-detail">
        <div className="d1">
          <span>작성자 | </span>
          <span>{boardDetail.dataname}</span>
        </div>
        <div className="d1">
          <span>제목 | </span>
          <span>{boardDetail.datatitle}</span>
        </div>
        <div className="d1">
          <span>내용</span>
          <div className="d-content">{boardDetail.datacontent}</div>
        </div>
        <hr />
        <div className="d-delete">
          비밀번호를 입력하세요{" "}
          <input
            type="password"
            name="password"
            value={isDeletePw || ""}
            onChange={onChangeDelete}
          />
        </div>
        {isDeleteFail && (
          <div className="d-wrong-pw">비밀번호가 틀렸습니다.</div>
        )}
        <div className="detail-button">
          {/* <Link
            to={`/modify/${id}`}
            state={{
              toM_nickname: boardDetail.dataname,
              toM_title: boardDetail.datatitle,
              toM_content: boardDetail.datacontent,
              toM_id: boardDetail.id,
              toM_pw: boardDetail.datapw,
            }}
          > */}
          <button onClick={onClickModify}>수정하기</button>
          {/* </Link> */}
          <button onClick={onClickDelete}>삭제하기</button>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;

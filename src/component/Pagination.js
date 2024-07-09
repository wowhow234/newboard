import React from "react";

const Pagination = ({
  boardsNum,
  currentPage,
  setCurrentPage,
  boardPerPage,
}) => {
  // 게시글 전체 갯수 : boardsNum
  // 현재페이지 : currentPage
  // 한 페이지당 게시글 갯수 : boardPerPage = 5

  // 전체 페이지 수 (전체 게시글 수를 페이지당 게시물 수로 나눈 것을 올림 처리)
  const totalPages = Math.ceil(boardsNum / boardPerPage);

  // console.log("current Page----->", currentPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    // console.log("go to next Page --->", currentPage);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    // console.log("go to previous Page --->", currentPage);
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={prevPage} className="active">
          이전
        </button>
      )}
      {Array(totalPages)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{ color: currentPage === i + 1 ? "blue" : "black" }}
          >
            {i + 1}
          </button>
        ))}
      {/* 현재 페이지 = 마지막 페이지 라면 다음 버튼 X */}
      {currentPage < totalPages && (
        <button onClick={nextPage} className="active">
          다음
        </button>
      )}
    </div>
  );
};

export default Pagination;

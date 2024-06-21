import React, { useState } from "react";

const Pagination = ({
  boardsNum,
  currentPage,
  setCurrentPage,
  boardPerPage,
}) => {
  // 게시글 전체 갯수 : boardsNum
  // 현재페이지 : currentPage
  // 한 페이지당 게시글 갯수 : boardPerPage

  // 전체 페이지 수 (전체 게시글 수를 페이지당 게시물 수로 나눈 것을 올림 처리)
  const totalPages = Math.ceil(boardsNum / boardPerPage);
  // 페이지 수를 1,2,3,4로 표현하기 위한 빈 배열
  const pagesList = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesList.push(i);
    console.log("pagesList Array : ", pagesList);
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log("next page --->", currentPage);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    console.log("prev page --->", currentPage);
  };

  // 게시글이 6개 미만이면 페이징 없음 <- 이거 없어도 될듯..? 일단 보고 결정하자
  // if (totalPages === 1) {
  //   return null;
  // }

  return (
    <div style={{ border: "1px solid black" }}>
      페이지네이션
      <button onClick={prevPage}>이전</button>
      {pagesList.map((item) => (
        <button>{item}</button>
      ))}
      <button onClick={nextPage}>다음</button>
    </div>
  );
};

export default Pagination;

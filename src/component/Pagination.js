import React, { useState } from "react";

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
  // 페이지 수를 1,2,3,4로 표현하기 위한 빈 배열
  // const pagesList = [];
  // // 마지막 페이지 번호
  // const lastPageNum = pagesList[pagesList.length - 1];

  // for (let i = 1; i <= totalPages; i++) {
  //   pagesList.push(i);
  //   console.log("pagesList Array : ", pagesList);
  // }

  // console.log("페이지 리스트 마지막---", pagesList[pagesList.length - 1]);
  console.log(">>현재 페이지<< currentPage----->", currentPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log("다음 페이지로 이동 --->", currentPage);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    console.log("이전 페이지로 이동 --->", currentPage);
  };

  // 게시글이 6개 미만이면 페이징 없음 <- 이거 없어도 될듯..? 일단 보고 결정하자
  // if (totalPages === 1) {
  //   return null;
  // }

  return (
    <>
      <div style={{ border: "1px solid black" }}>
        페이지네이션
        {currentPage > 1 && <button onClick={prevPage}>이전</button>}
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
        {/* {pagesList.map((item) => (
          <button
            key={item}
            onClick={() => setCurrentPage(item)}
            style={{ color: currentPage === item ? "blue" : "black" }}
          >
            {item}
          </button>
        ))} */}
        {/* 현재 페이지 = 마지막 페이지 라면 다음 버튼 X */}
        {currentPage < totalPages && <button onClick={nextPage}>다음</button>}
      </div>
    </>
  );
};

export default Pagination;

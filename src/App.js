import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Header from "./component/Header";
import Board from "./component/Board";
import BoardWrite from "./component/BoardWrite";
import BoardDetail from "./component/BoardDetail";
import BoardModify from "./component/BoardModify";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/:id" element={<BoardDetail />} />
          <Route path="/write" element={<BoardWrite />} />
          <Route path="/modify/:id" element={<BoardModify />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

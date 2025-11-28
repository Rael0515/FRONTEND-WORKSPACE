import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="app">
      <h2 style={{ color: "blue" }}>Home Page</h2>
      <p>
        <Link to={`/post`}>게시물 목록 보기</Link>
      </p>
      <br />
      <p>
        <Link to={`/student`}>학생 목록 보기</Link>
      </p>
      <br />
      <p>
        <Link to="/movies">영화 리스트 보기</Link>
      </p>
      <br />
      <p>
        <Link to="/searchmovie">영화 제목으로 검색</Link>
      </p>
    </div>
  );
};
export default Home;

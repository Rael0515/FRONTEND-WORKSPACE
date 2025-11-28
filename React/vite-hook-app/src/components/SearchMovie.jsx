import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const SearchMovie = () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const Searching = () => {
    if (keyword.trim() === "") {
      alert("제목으로 검색");
      return;
    }
  };
  axios
    .get(`http://210.93.60.16:8080/frontend/movie/title/${keyword}`)
    .then((response) => {
      const data = Array.isArray(response.data)
        ? response.data
        : [response.data];
      setResult(data);
    })
    .catch((error) => {
      console.log("Error fetching Movies:", error);
      setResult([]);
    });
  return (
    <div className="app">
      <h1>영화검색</h1>
      <input
        type="text"
        placeholder="영화 제목 입력"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={Searching}>검색</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>장르</th>
            <th>개봉일</th>
            <th>플롯</th>
            <th>감독</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.genre}</td>
                <td>{item.dates}</td>
                <td>{item.plot}</td>
                <td>{item.supervisor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>
        <Link to={`/`}>홈 페이지</Link>
      </p>
    </div>
  );
};
export default SearchMovie;

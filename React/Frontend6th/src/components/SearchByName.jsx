import React, { useState } from "react";
import axios from "axios";

const SearchByName = () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);

  const Searching = () => {
    if (keyword.trim() === "") {
      alert("영화 제목을 입력하세요.");
      return;
    }

    axios
      .get(`http://210.93.60.16:8080/frontend/movie/title/${keyword}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Movies:", error);
        setResult([]);
      });
  };

  return (
    <div className="movie-search">
      <h2>영화 제목으로 검색</h2>
      <div className="searching">
        <input
          type="text"
          placeholder="영화 제목 입력"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={Searching}>검색</button>
      </div>
      <table className="movie-table">
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
          {!result ? (
            <tr>
              <td colSpan="6" className="Notthing">
                검색 결과가 없습니다.
              </td>
            </tr>
          ) : (
            <tr>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.genre}</td>
              <td>{result.dates}</td>
              <td className="plot">{result.plot}</td>
              <td>{result.supervisor}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchByName;

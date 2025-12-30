import React, { useState } from "react";
import axios from "axios";

const SearchBySupervisor = () => {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);

  const Searching = () => {
    if (keyword.trim() === "") {
      alert("감독 이름을 입력하세요.");
      return;
    }

    axios
      .get(`http://210.93.60.16:8080/frontend/movie/supervisor/${keyword}`)
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
  };

  return (
    <div className="movie-search">
      <div className="searching">
        <input
          type="text"
          placeholder="감독 이름 입력 (예: 크리스토퍼 놀란)"
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
          {result.length === 0 ? (
            <tr>
              <td colSpan="6" className="Notthing">
                검색 결과가 없습니다.
              </td>
            </tr>
          ) : (
            result.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.genre}</td>
                <td>{item.dates}</td>
                <td className="plot">{item.plot}</td>
                <td>{item.supervisor}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBySupervisor;

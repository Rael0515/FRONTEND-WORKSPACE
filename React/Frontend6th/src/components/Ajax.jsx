import React, { useState, useEffect } from "react";
import Analysis from "./Analysis";
import axios from "axios";
function Ajax() {
  const [scoreList, setScoreList] = useState([]);

  useEffect(() => {
    axios
      .get("http://210.93.60.16:8080/frontend/task/score")
      .then((res) => {
        setScoreList(res.data);
      })
      .catch((err) => {
        console.error("성적 데이터 요청 오류:", err);
      });
  }, []);

  return (
    <div className="section">
      <h3>전체 성적과 성적 분석 페이지</h3>
      <table className="score-table">
        <thead>
          <tr>
            <th>이름</th>
            <th>자바</th>
            <th>자바스크립트</th>
            <th>파이썬</th>
            <th>C++</th>
            <th>리액트</th>
            <th>솔리디티</th>
          </tr>
        </thead>
        <tbody>
          {scoreList.map((s, idx) => (
            <tr key={idx}>
              <td>{s.name}</td>
              <td>{s.java}</td>
              <td>{s.js}</td>
              <td>{s.python}</td>
              <td>{s.cplus}</td>
              <td>{s.react}</td>
              <td>{s.solidity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Analysis scoreData={scoreList} />
    </div>
  );
}
export default Ajax;

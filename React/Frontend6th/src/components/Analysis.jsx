import React from "react";

function Analysis({ scoreData }) {
  if (!scoreData || scoreData.length === 0) {
    return null;
  }

  const withTotal = scoreData.map((s) => ({
    ...s,
    total: s.java + s.js + s.python + s.cplus + s.react + s.solidity,
  }));

  const sorted = [...withTotal].sort((a, b) => b.total - a.total);

  const countTopBottom = Math.floor(sorted.length * 0.3) || 1;
  const top30 = sorted.slice(0, countTopBottom);
  const bottom30 = sorted.slice(-countTopBottom);

  const n = scoreData.length;
  const avg = {
    java: scoreData.reduce((sum, s) => sum + s.java, 0) / n,
    js: scoreData.reduce((sum, s) => sum + s.js, 0) / n,
    python: scoreData.reduce((sum, s) => sum + s.python, 0) / n,
    cplus: scoreData.reduce((sum, s) => sum + s.cplus, 0) / n,
    react: scoreData.reduce((sum, s) => sum + s.react, 0) / n,
    solidity: scoreData.reduce((sum, s) => sum + s.solidity, 0) / n,
  };

  const format2 = (v) => v.toFixed(2);

  const renderRow = (s) => (
    <tr key={s.name}>
      <td>{s.name}</td>
      <td>{s.java}</td>
      <td>{s.js}</td>
      <td>{s.python}</td>
      <td>{s.cplus}</td>
      <td>{s.react}</td>
      <td>{s.solidity}</td>
      <td>{s.total}</td>
    </tr>
  );

  return (
    <div className="section">
      <h4>상위 30%</h4>
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
            <th>총점</th>
          </tr>
        </thead>
        <tbody>{top30.map(renderRow)}</tbody>
      </table>

      <h4>하위 30%</h4>
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
            <th>총점</th>
          </tr>
        </thead>
        <tbody>{bottom30.map(renderRow)}</tbody>
      </table>
      <div className="score-table-final">
        <h4>과목별 평균</h4>
        <table className="score-table">
          <thead>
            <tr>
              <th>자바</th>
              <th>자바스크립트</th>
              <th>파이썬</th>
              <th>C++</th>
              <th>리액트</th>
              <th>솔리디티</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{format2(avg.java)}</td>
              <td>{format2(avg.js)}</td>
              <td>{format2(avg.python)}</td>
              <td>{format2(avg.cplus)}</td>
              <td>{format2(avg.react)}</td>
              <td>{format2(avg.solidity)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Analysis;

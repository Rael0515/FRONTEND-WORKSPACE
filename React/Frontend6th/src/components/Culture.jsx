import { Link } from "react-router-dom";

function Culture() {
  return (
    <div className="section">
      <ul className="culture-links">
        <li>
          <Link to="/movielist">1. 영화 전체 목록 보기</Link>
        </li>
        <li>
          <Link to="/movietitle">2. 영화 제목으로 검색</Link>
        </li>
        <li>
          <Link to="/moviesupervisor">3. 영화 감독으로 검색</Link>
        </li>
      </ul>
    </div>
  );
}

export default Culture;

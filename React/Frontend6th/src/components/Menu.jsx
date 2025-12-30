import { Link } from "react-router-dom";
import "../styles/App.css";

function Menu() {
  return (
    <nav>
      <div>
        <Link to="/">나의 소개</Link>
      </div>
      <div>
        <Link to="/interest">나의 관심</Link>
      </div>
      <div>
        <Link to="/analysis">학습 내용</Link>
      </div>
      <div>
        <Link to="/digital">디지털 컨텐츠</Link>
      </div>
      <div>
        <Link to="/culture">문화 컨텐츠</Link>
      </div>
    </nav>
  );
}

export default Menu;

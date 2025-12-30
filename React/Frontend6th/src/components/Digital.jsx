import Clock from "./Clock";
import Calculator from "./Calculator";
import "../styles/caculator.css";

function Digital() {
  return (
    <div className="section digital-section">
      <Clock />
      <Calculator />
    </div>
  );
}

export default Digital;

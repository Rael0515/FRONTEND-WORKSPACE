import { useState } from "react";

const Calculator = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [result, setResult] = useState(0);
  const onChangeX = (e) => setX(Number(e.target.value));
  const onChangeY = (e) => setY(Number(e.target.value));
  const onAdd = () => setResult(x + y);
  const onSubtract = () => setResult(Number(x) - Number(y));
  const onMultiply = () => setResult(Number(x) * Number(y));
  const onDevide = () => setResult(Number(x) / Number(y));
  return (
    <div>
      <h3>계산기(Calculator) 컴포넌트</h3>
      x: <input type="text" vlaue={x} onChange={onChangeX} /> <br />
      y: <input type="text" value={y} onChange={onChangeY} /> <br />
      result: <span id="result">{result}</span>
      <br />
      <br />
      <button type="button" onClick={onAdd}>
        덧셈
      </button>
      <button type="button" onClick={onSubtract}>
        뺄셈
      </button>
      <button type="button" onClick={onMultiply}>
        곱셈
      </button>
      <button type="button" onClick={onDevide}>
        나눗셈
      </button>
    </div>
  );
};
export default Calculator;

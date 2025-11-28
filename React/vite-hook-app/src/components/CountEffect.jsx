import { useState, useEffect } from "react";

const CountEffect = () => {
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    document.getElementById(
      "effect"
    ).innerText = `effect 적용 : 총 ${num}번 클릭했습니다.`;
  }, [num]); // 상태 값(num)이 변경될 때마다 수행 : num 변수를 두 번째 인자 값인 배열에 지정

  return (
    <div calssName="app">
      <h2 style={{ color: "blue" }}>useEffect 를 이용한 Count 예제!</h2>
      <button onClick={onClickButton}>카운트 버튼</button>
      <p>state: 총{num}번 클릭 했습니다.</p>
      <p id="effect"></p>
      <br></br>
    </div>
  );
};
export default CountEffect;

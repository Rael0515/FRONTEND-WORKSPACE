import { useState } from "react";

const Count = () => {
  let numClick = 0; // 함수의 변수로 사용 경우
  const [num, setNum] = useState(0); // state로 선언한 변수로 활용 경우
  const onClickButton = () => {
    setNum(num + 1);
    //numClick = numClick + 1;//안변한다는것을 알게 해주는 테스트코드
  };

  return (
    <div className="app">
      <h2 style={{ color: "blue" }}>useState 함수를 이용한 Count 예제!</h2>
      <button onClick={onClickButton}>카운트 버튼</button>
      <p> state 경우 : 총 {num}번 클릭했습니다. </p>
      <p> 변수 경우 : 총 {numClick}번 클릭했습니다. </p>
      <br></br>
    </div>
  );
};

export default Count;

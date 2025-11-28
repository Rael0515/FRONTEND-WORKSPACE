import { useState, useRef } from "react";

const InputRef = () => {
  const [text, setText] = useState("");
  const textRef = useRef(); // useRef로 생성한 객체 textRef에 저장
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  const onClickButton = () => {
    alert(text);
    textRef.current.value = ""; // textRef 로 입력 폼을 초기화
  };
  return (
    <div className="app">
      <h2 style={{ color: "blue" }}>useRef 함수를 이용한 입력 값 예제!</h2>
      <input ref={textRef} value={text} onChange={onChangeText} />
      <button onClick={onClickButton}> 작성 완료</button>
      <div> {text} </div>
      <br></br>
    </div>
  );
};
export default InputRef;

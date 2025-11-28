import { useState } from "react";
import InputView from "./InputView";

const Input = () => {
  const [text, setText] = useState("");
  const onChangeText = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="app">
      <h2 style={{ color: "blue" }}>useState 함수를 이용한 입력 값 예제!</h2>
      <input value={text} onChange={onChangeText} />
      <div> {text}</div>
      <br></br>
      <InputView text={text} />
    </div>
  );
};

export default Input;

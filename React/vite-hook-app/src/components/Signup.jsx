import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("남성");
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeAge = (event) => {
    setAge(event.target.value);
  };
  const onChangeGender = (event) => {
    setGender(event.target.value);
  };
  const onClickSubmit = (event) => {
    document.getElementById(
      "view"
    ).innerText = `onClickSubmit : 이름: ${name}, 나이: ${age}, 성별: ${gender} `;
    event.preventDefault(); // 해당 이벤트의 기본 동작을 막아준다
  };
  return (
    <div className="app">
      <h2 style={{ color: "blue" }}>폼 입력시 발생하는 이벤트 처리 예제!</h2>
      <form onSubmit={onClickSubmit}>
        이름: <input value={name} onChange={onChangeName} />
        <br />
        나이: <input value={age} onChange={onChangeAge} />
        <br />
        성별:
        <select value={gender} onChange={onChangeGender}>
          <option value="여성">여성</option>
          <option value="남성">남성</option>
        </select>
        <button type="submit">제출</button>
      </form>
      <p id="view"> </p>
    </div>
  );
};
export default Signup;

function InputView(props) {
  const data = props.text;
  return (
    <div className="app">
      <h2 style={{ color: "blue" }}>
        state를 props로 자식 컴포넌트에 전달 예제 !
      </h2>
      <h2> 전달 받은 값은 : {data} 입니다. </h2>
    </div>
  );
}
export default InputView;

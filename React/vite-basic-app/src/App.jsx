/*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
import "./App.css"; //css 일반 처리하면 오류나서 일단 주석처리함.
//css임포트 하고싶으면 Appcss 파일 생성하면 됩니다.
import { Fragment } from "react";
import Header from "./examples/Header.jsx";
import Footer from "./examples/Footer.jsx";
import Home from "./examples/Home.jsx";

import Post from "./examples/Post";

function App() {
  /*const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )*/
  //const HeaderProps = { title: "헤더(props)", subTitle: "프론트 프로그래밍" };
  return (
    <Fragment>
      <Header title="헤더(props)" subTitle="프론트 프로그래밍" />
      <Home>
        <Post />
      </Home>
      <Footer title="풋터(props)" />
    </Fragment>
  );
}

export default App;

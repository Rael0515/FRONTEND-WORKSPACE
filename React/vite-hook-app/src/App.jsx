/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router";
import { Fragment } from "react";

import Count from "./components/Count.jsx";
import Input from "./components/Input.jsx";
import Calculator from "./components/Calculator.jsx";
//import InputRef from "./components/InputRef.jsx";
import "./styles/App.css";
import Signup from "./components/Signup.jsx";

import CountEffect from "./components/CountEffect.jsx";
import Post from "./components/Post.jsx";
import Home from "./components/Home.jsx";
import StudentList from "./components/StudentList.jsx";
import MovieList from "./components/MovieList.jsx";
import SearchMovie from "./components/SearchMovie.jsx";

function App() {
  //const [count, setCount] = useState(0)
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/student" element={<StudentList />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/searchmovie" element={<SearchMovie />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
    /*<>
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
    </>*/
  );
}

export default App;

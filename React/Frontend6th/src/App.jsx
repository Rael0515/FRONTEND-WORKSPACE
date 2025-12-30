import { BrowserRouter, Routes, Route } from "react-router";
import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Interest from "./components/Interest";
import Ajax from "./components/Ajax";
import Digital from "./components/Digital";
import Culture from "./components/Culture";
import MovieList from "./components/MovieList";
import SearchByName from "./components/SearchByName";
import SearchBySupervisor from "./components/SearchBySupervisor";
import "./styles/App.css";
const App = () => {
  return (
    <Fragment>
      <Header title="My React Programming " />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} /> // 나의 소개
          <Route path="/interest" element={<Interest />} /> // 나의 관심
          <Route path="/analysis" element={<Ajax />} /> // 학습 내용
          <Route path="/digital" element={<Digital />} /> // 디지털 컨텐츠
          <Route path="/culture" element={<Culture />} /> // 문화 컨텐츠
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/movietitle" element={<SearchByName />} />
          <Route path="/moviesupervisor" element={<SearchBySupervisor />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
};
export default App;

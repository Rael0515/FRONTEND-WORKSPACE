import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line
    fetchMovies();
  }, []);
  const fetchMovies = () => {
    axios
      .get("http://210.93.60.16:8080/frontend/movie/list")
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => {
        console.log("Error fetching Movies:", error);
      });
  };

  return (
    <div className="app">
      <table className="movie-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>장르</th>
            <th>개봉일</th>
            <th>플롯</th>
            <th>감독</th>
          </tr>
        </thead>
        <tbody>
          {movieList.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.genre}</td>
                <td>{item.dates}</td>
                <td>{item.plot}</td>
                <td>{item.supervisor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>
        <Link to={`/`}>홈 페이지</Link>
      </p>
    </div>
  );
};
export default MovieList;

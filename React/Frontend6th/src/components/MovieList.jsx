import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
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
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie-list-page">
      <h2>영화 전체 목록</h2>
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
          {movieList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.dates}</td>
              <td className="plot">{item.plot}</td>
              <td>{item.supervisor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;

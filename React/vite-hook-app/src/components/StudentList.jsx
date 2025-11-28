import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
const StudentList = () => {
  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line
    fetchStudents();
  }, []);
  const fetchStudents = () => {
    axios
      .get("http://210.93.60.16:8080/frontend/RestController?cmd=list")
      .then((response) => {
        setStudentList(response.data);
      })
      .catch((error) => {
        console.log("Error fetching students:", error);
      });
  };
  return (
    <div className="app">
      <table>
        <thead>
          <tr>
            <th>계정</th>
            <th>비밀번호</th>
            <th>이름</th>
            <th>학번</th>
            <th>학과</th>
            <th>전화번호</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.passwd}</td>
                <td>{item.username}</td>
                <td>{item.snum}</td>
                <td>{item.depart}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
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
export default StudentList;

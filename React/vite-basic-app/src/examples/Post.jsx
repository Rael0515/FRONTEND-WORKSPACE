import React from "react";
const Post = () => {
  const headerName = ["번호", "제목", "작성일", "작성자"];
  const PostList = [
    { id: "1", title: "HTML", createdDate: "2024-07-01", name: "버너스 리" },
    {
      id: "2",
      title: "JavaScript",
      createdDate: "2024-09-03",
      name: "브랜든 아이크",
    },
    { id: "3", title: "React", createdDate: "2024-10-04", name: "조던 워커" },
    { id: "4", title: "Spring", createdDate: "2024-08-02", name: "로드 존슨" },
    {
      id: "5",
      title: "Solidity",
      createdDate: "2024-08-02",
      name: "가빈 우드",
    },
    { id: "6", title: "Bitcoin", createdDate: "2024-11-05", name: "사토시" },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            {headerName.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {PostList.map((item, index) => {
            return (
              <tr key={index.item}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.createdDate}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Post;

import Post from "./Post";
function Home({ children }) {
  return (
    <div className="home">
      <h3>홈(home) 컴포넌트 - 본문 내용을 표현합니다.</h3>
      {children}
    </div>
  );
}
export default Home;

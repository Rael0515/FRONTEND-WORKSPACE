import "../styles/App.css";

function Home() {
  return (
    <section>
      <div className="home_title">
        <h3>안녕하세요. 저는 류상진 입니다.</h3>
        <h3>한국공학대학교 컴퓨터공학부 재학중 입니다.</h3>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <img
          src="/images/Gotohome.webp"
          alt="intro"
          style={{ width: "500px", borderRadius: "20px" }}
        />
      </div>
    </section>
  );
}

export default Home;

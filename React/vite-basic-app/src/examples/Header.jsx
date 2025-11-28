function Header(props) {
  const { title, subTitle } = props;
  return (
    <header className="header">
      <h3>
        제목은{title} 컴포넌트입니다. 소제목은 {subTitle}입니다.
      </h3>
    </header>
  );
}
export default Header;

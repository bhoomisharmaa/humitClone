import "./header.css";
function Header() {
  return (
    <>
      <header>
        <img src="logo+wordmark.png" height={"24px"} width={"94.88px"} />
        <input placeholder="          Search for people and stations" />
        <div className="frame-button">
          <img src="Frame.png" height={"40px"} width={"40px"} />
          <button className="download-button">Download App</button>
        </div>
      </header>
    </>
  );
}

export default Header;

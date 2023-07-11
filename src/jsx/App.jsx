import mainLogo from "../images/electrons-main-logo.webp";

function App() {
  return (
    <>
      <div>
        <img
          src={mainLogo}
          className="logo"
          alt="main logo"
          width="275"
          height="39"
        />
      </div>
      <h1>Welcome to Electrons!</h1>
      <div className="card"></div>
    </>
  );
}

export default App;

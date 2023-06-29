import mainLogo from "../images/electrons-main-logo.webp";
// import secondaryLogo from "../images/electrons-secondary-logo.webp";
import "../styles/App.css";

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
        {/* <img src={secondaryLogo} className="logo" alt="secondary logo" width="250" height="38" /> */}
      </div>
      <h1>Welcome to Electrons!</h1>
      <div
        className="card"
      >
        
      </div>
    </>
  );
}

export default App;

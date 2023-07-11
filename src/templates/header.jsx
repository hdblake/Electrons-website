import mainLogo from "../images/electrons-main-logo.webp";

export default function Header() {
  return (
    <>
      <div className="logo">
        <a href="../index.html">
          <img
            src={mainLogo}
            className="logo"
            alt="main logo"
            width="275"
            height="39"
          />
        </a>
      </div>
      <div className="cart"></div>
    </>
  );
}

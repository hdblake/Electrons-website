import mainLogo from "../images/electrons-main-logo.webp";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img
            src={mainLogo}
            className="logo"
            alt="main logo"
            width="275"
            height="39"
          />
        </Link>
      </div>
      <div className="cart"></div>
    </>
  );
}

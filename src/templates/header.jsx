import mainLogo from "../images/electrons-main-logo.webp";
import { Link } from "react-router-dom";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export default function Header() {
  return (
    <div className="logo-cart-wrapper flex justify-between mx-2 mb-9 mt-3">
      <div className="logo">
        <Link to="/">
          <img
            src={mainLogo}
            className="logo"
            alt="main logo"
            width="240"
            height="34"
          />
        </Link>
      </div>
      <div className="cart">
        <Link to="/cart">
          <ShoppingCartSharpIcon
            className="text-main"
            style={{
              fontSize: "32px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

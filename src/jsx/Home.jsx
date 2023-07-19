import { Link, Outlet } from "react-router-dom";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopIcon from "@mui/icons-material/Laptop";

export default function Home() {
  return (
    <div className="home-wrapper">
      <h1 className="md:text-6xl text-5xl text-center mx-3 mb-8 text-main font-bold underline decoration-secondary">
        Welcome to Electrons!
      </h1>
      <h2 className="text-center text-3xl md:text-4x; mx-3 mb-8 text-main">
        Please select a category below to start shopping:
      </h2>
      <div className="category-wrapper grid gap-6 md:grid-cols-2 sm:grid-cols-1 justify-items-center items-center content-center mx-4">
        <Link
          to="/products/smartphones"
          className="text-main flex flex-col justify-center items-center rounded-2xl border-2 border-secondary py-8 px-3 hover:shadow-md hover:shadow-secondary px-4"
        >
          <h3 className="underline text-2xl mb-4 underline-offset-8 decoration-2">
            Smartphones
          </h3>
          <div>
            <SmartphoneIcon style={{ fontSize: "250px" }} />
          </div>
        </Link>
        <Link
          to="/products/laptops"
          className="text-main flex flex-col justify-center items-center rounded-2xl border-2 border-secondary py-8 px-3 hover:shadow-md hover:shadow-secondary"
        >
          <h3 className="underline text-2xl mb-4 underline-offset-8 decoration-2">
            Laptops
          </h3>
          <div>
            <LaptopIcon style={{ fontSize: "250px" }} />
          </div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

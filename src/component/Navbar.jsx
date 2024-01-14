import { RiMenuLine, RiUser3Line, RiShoppingBasketLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { amount } = useCart();
  const [menuToggle, setMenuToggle] = useState(false);
  window.document.addEventListener("mouseup", (event) => {
    if (
      event.target.closest("#menu-toggle") === null &&
      event.target.closest("#menu-button") === null
    ) {
      setMenuToggle(false);
    }
  });
  const [logInToggle, setLogInToggle] = useState(false);
  window.document.addEventListener("mouseup", (event) => {
    if (
      event.target.closest("#LogIn-toggle") === null &&
      event.target.closest("#LogIn-button") === null
    ) {
      setLogInToggle(false);
    }
  });
  return (
    <div className="w-full z-10 px-[2rem] fixed text-primary">
      <div className="relative shadow-md bg-white px-[1.6rem] h-[3.5rem] md:h-[4.5rem] mt-[1rem] grid grid-cols-3 rounded-[1.75rem] md:rounded-[2.5rem] w-full mx-auto max-w-6xl">
        <ul className="sm:flex hidden items-center gap-2 font-semibold md:text-xl">
          {/* ======================== MENU FO SM DEVICE ======================= */}
          <li>
            <Link
              className="hover:bg-tertiary px-[0.5rem] py-[0.15rem] rounded-[0.7rem]"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-tertiary px-[0.5rem] py-[0.15rem] rounded-[0.7rem]"
              to="/shop"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-tertiary px-[0.5rem] py-[0.15rem] rounded-[0.7rem]"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
        <div className="sm:hidden flex items-center justify-start text-lg mt-[0.2rem]">
          <div
            onClick={() => setMenuToggle((prev) => (prev ? false : true))}
            className="hover:bg-tertiary px-[0.3rem] py-[0.35rem] rounded-[0.7rem]"
          >
            <RiMenuLine id="menu-button" />
          </div>
        </div>
        {/* ======================== MENU FO MOBILE DEVICE ======================= */}
        <div
          className={`${
            menuToggle ? "grid" : "hidden"
          } items-center font-semibold absolute top-[4.5rem] bg-white px-[1rem] py-[0.5rem] rounded-[.7rem] shadow-lg`}
          id="menu-toggle"
        >
          <h3 className="flex justify-center text-2xl py-[0.5rem] font-primary">
            Menu
          </h3>
          <ul>
            <li>
              <Link
                onClick={() => setMenuToggle((prev) => (prev ? false : true))}
                className="hover:bg-tertiary py-[0.15rem] rounded-[0.5rem] px-[2rem]"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuToggle((prev) => (prev ? false : true))}
                className="hover:bg-tertiary py-[0.15rem] rounded-[0.5rem] px-[2rem]"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuToggle((prev) => (prev ? false : true))}
                className="hover:bg-tertiary py-[0.15rem] rounded-[0.5rem] px-[2rem]"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* ======================== LOGO ======================= */}
        <a href="/" className="flex items-center justify-center">
          <p className="nav_logo text-xl md:text-3xl font-semibold font-primary text-primary">
            Hwan-Yen
          </p>
        </a>
        {/* ======================== ACTIVE ICON ======================= */}
        <div className="relative flex items-center justify-end text-lg md:text-2xl mt-[0.2rem]">
          <div
            id="LogIn-button"
            onClick={() => setLogInToggle((prev) => (prev ? false : true))}
            className="hover:bg-tertiary px-[0.3rem] py-[0.35rem] rounded-[0.7rem] cursor-pointer"
          >
            <RiUser3Line />
          </div>
          <Link to="/cart">
            <div className="hover:bg-tertiary px-[0.3rem] py-[0.35rem] rounded-[0.7rem]">
              <RiShoppingBasketLine />
            </div>
            <div
              className={`${
                amount == 0 ? "hidden" : "flex"
              } absolute justify-center items-center text-sm bg-red-500 rounded-full w-[1.25rem] h-[1.25rem] top-[17%] right-[-3%] md:top-[20%] md:right-[-1.5%]`}
            >
              <span className="pt-[0.1rem]">{amount}</span>
            </div>
          </Link>
        </div>
        {/* ======================== LOG IN ======================= */}
        <div
          id="LogIn-toggle"
          className={`${
            logInToggle ? "grid" : "hidden"
          } absolute top-[4.5rem] right-0 md:top-[5.5rem] w-full max-w-[500px]`}
        >
          <div className=" bg-quaternary p-[1.5rem] rounded-[0.7rem]">
            <h2 className="text-2xl font-bold text-center">Log in</h2>
            <form action="">
              <div className="grid">
                <label htmlFor="login-emai;">Email</label>
                <input
                  type="email"
                  placeholder="Write your email"
                  className="px-[0.5rem] py-[0.25rem]"
                />
              </div>
              <div className="grid">
                <label htmlFor="login-pass">Password</label>
                <input
                  type="password"
                  placeholder="Input your password"
                  className="px-[0.5rem] py-[0.25rem]"
                />
              </div>
            </form>
            <div className="text-center m-[1rem] ">
              <span>
                You do not have an account?{" "}
                <a href="#" className="font-semibold">
                  Sign up
                </a>
              </span>
              <br />
              <a href="#" className="font-semibold">
                You forgot your password
              </a>
            </div>
            <div className="flex justify-center">
              <button className="bg-secondary text-white px-[2rem] py-[0.5rem] rounded-[1.5rem]">
                Lig In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

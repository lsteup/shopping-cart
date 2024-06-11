import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { useAppContext } from "../pages/Home";
import { useLocation } from "react-router-dom";
import Banner from "./Banner";
import logo from "/logo.png";

const Navbar = () => {
  const location = useLocation().pathname;
  let cart, items;

  const [navbar, setNavbar] = useState(false);
  if (useAppContext()) {
    cart = useAppContext().cart;
    items = cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  }

  return (
    <>
      <nav className="md:hidden border-b-2 border-zinc-800 bg-gradient-to-r from-sky-50 to-orange-50 sticky top-0 z-50">
        {!navbar && (
          <div
            onClick={() => setNavbar(true)}
            className=" flex items-center justify-between p-2 sticky top-0 z-50 "
          >
            <Link to="/">
              <img className="h-20" src={logo} alt="" />
            </Link>
            <FaBars className="hover:scale-110" size="1.7em" />
          </div>
        )}

        {navbar && (
          <div>
            <div>
              <Link to="/">
                <img className="h-20 mx-auto py-2" src={logo} alt="" />
              </Link>
              <IoMdClose
                className="hover:scale-125 absolute top-0 right-0"
                onClick={() => setNavbar(false)}
                size="2em"
              />
            </div>
            <ul className="flex flex-col divide-y-2 divide-zinc-800 font-semibold uppercase">
              <li>
                <Link className="hover:bg-orange-400 block p-2" to="albums">
                  Albums
                </Link>
              </li>
              <li>
                <Link className=" hover:bg-orange-400 block p-2 " to="new">
                  New Releases
                </Link>
              </li>
              <li>
                <Link className=" hover:bg-orange-400 block p-2 " to="sale">
                  Sale
                </Link>
              </li>
              <li>
                <Link className=" hover:bg-orange-400 block p-2 " to="vintage">
                  Vintage
                </Link>
              </li>

              <li>
                <Link className="hover:bg-orange-400 block p-2 " to="cart">
                  My Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <nav className="hidden md:block bg-gradient-to-r from-sky-50 to-orange-50 sticky top-0 z-50 border-b border-zinc-900 uppercase">
        <Banner />
        <ul className="flex font-semibold items-center gap-6 lg:gap-8 text-lg lg:text-xl p-4">
          <li className="grow ">
            <Link className="grow  items-center" to="/">
              <img className="h-20" src={logo} alt="" />
            </Link>
          </li>

          <li>
            <Link
              className={`${
                location.startsWith("/albums") && "underline"
              } hover:underline decoration-2 underline-offset-4 decoration-orange-500  `}
              to="albums"
            >
              Vinyls and Records
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.startsWith("/new") && "underline"
              } hover:underline decoration-2 underline-offset-4 decoration-orange-500  `}
              to="new"
            >
              New
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.startsWith("/sale") && "underline"
              } hover:underline decoration-2 underline-offset-4 decoration-orange-500  `}
              to="sale"
            >
              Sale
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.startsWith("/vintage") && "underline"
              } hover:underline decoration-2 underline-offset-4 decoration-orange-500  `}
              to="vintage"
            >
              Vintage
            </Link>
          </li>

          <li>
            <Link
              className={` ${
                location.startsWith("/cart") && "underline"
              } hover:underline decoration-2 underline-offset-4 decoration-orange-500  `}
              to="cart"
            >
              <BsCart4 className="hover:scale-110 mr-1 lg:hidden" size="2em" />
              <p className="hidden lg:block">
                My Cart{" "}
                <span className="text-lg text-orange-500">({items} items)</span>{" "}
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;

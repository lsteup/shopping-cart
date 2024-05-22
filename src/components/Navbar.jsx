import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useAppContext } from "../pages/Home";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;

  const [navbar, setNavbar] = useState(false);
  const { cart } = useAppContext();
  const items = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  console.log(items);
  return (
    <>
      <nav className="md:hidden border-b-2 border-zinc-800">
        {!navbar && (
          <div
            onClick={() => setNavbar(true)}
            className="block p-2 bg-orange-100 "
          >
            <FaBars className="hover:scale-110" size="2em" />
          </div>
        )}

        {navbar && (
          <div>
            <ul className="flex flex-col divide-y-2 divide-zinc-800 font-semibold">
              <li className="flex items-center bg-orange-100 hover:bg-orange-400 ">
                <Link className="grow block p-2 " to="/">
                  Home
                </Link>
                <IoMdClose
                  className="hover:scale-125"
                  onClick={() => setNavbar(false)}
                  size="2em"
                />
              </li>
              <li>
                <Link
                  className="hover:bg-orange-400 block p-2 bg-orange-100"
                  to="artists"
                >
                  Artists
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-orange-400 block p-2 bg-orange-100"
                  to="albums"
                >
                  Albums
                </Link>
              </li>
              <li>
                <Link
                  className=" hover:bg-orange-400 block p-2 bg-orange-100"
                  to="new"
                >
                  New Releases
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-orange-400 block p-2 bg-orange-100"
                  to="cart"
                >
                  My Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <nav className="hidden md:block bg-orange-100 p-4 lg:p-6 border-b-2 border-zinc-900">
        <ul className="flex font-semibold items-center gap-6 lg:gap-8 text-lg lg:text-xl">
          <li className="grow ">
            <Link className="grow block " to="/">
              <IoHomeOutline className="hover:scale-110 lg:hidden" size="3em" />
              <p className="hidden lg:block text-2xl tracking-tighter uppercase ">
                Vinyl
                <span className="text-orange-600 text-bold tracking-wider">
                  Haven
                </span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.startsWith("/artists") && "underline"
              } hover:underline decoration-2 underline-offset-4 decoration-orange-500  `}
              to="artists"
            >
              Artists
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.startsWith("/albums") && "underline"
              } hover:underline decoration-2 underline-offset-4 decoration-orange-500  `}
              to="albums"
            >
              Albums
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

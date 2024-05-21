import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="border-b-2 border-orange-500">
      {!navbar && (
        <div
          onClick={() => setNavbar(true)}
          className="block p-2 bg-orange-100 "
        >
          <FaBars size="2em" />
        </div>
      )}

      {navbar && (
        <div>
          <ul className="flex flex-col divide-y-2 divide-orange-500 ">
            <li className="flex items-center bg-orange-100">
              <Link className="grow block p-2 " to="/">
                Home
              </Link>
              <IoMdClose onClick={() => setNavbar(false)} size="2em" />
            </li>
            <li>
              <Link className="block p-2 bg-orange-100" to="artists">
                Artists
              </Link>
            </li>
            <li>
              <Link className="block p-2 bg-orange-100" to="albums">
                Albums
              </Link>
            </li>
            <li>
              <Link className="block p-2 bg-orange-100" to="new">
                New Releases
              </Link>
            </li>
            <li>
              <Link className="block p-2 bg-orange-100" to="cart">
                My Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;

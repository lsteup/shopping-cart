import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-200 p-5">
      <ul className="flex gap-5">
        <li className="grow ">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/genres">Genres</Link>
        </li>
        <li>
          <Link to="artists">Artists</Link>
        </li>
        <li>
          <Link to="albums">Albums</Link>
        </li>
        <li>
          <Link to="cart">My Cart</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

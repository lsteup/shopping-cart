const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-200 p-5">
      <ul className="flex gap-5">
        <li className="grow ">Home</li>
        <li>Genres</li>
        <li>Artists</li>
        <li>Albums</li>
        <li>My Cart</li>
      </ul>
    </nav>
  );
};
export default Navbar;

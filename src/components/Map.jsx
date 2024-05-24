import { Link, useLocation } from "react-router-dom";

const Map = ({ album, artist }) => {
  const location = useLocation().pathname;
  let previous;
  if (location.startsWith("/albums")) previous = "albums";
  else if (location.startsWith("/sale")) previous = "sale";
  else if (location.startsWith("/vintage")) previous = "vintage";

  return (
    <nav className="flex justify-between capitalize text-xs mb-8 max-w-md mx-auto ">
      <Link className="hover:underline" to="/">
        home
      </Link>
      <p> → </p>
      <Link className="hover:underline uppercase " to={`/${previous}`}>
        {previous}
      </Link>
      <p> → </p>
      <p className="text-zinc-500">{album}</p>
    </nav>
  );
};
export default Map;

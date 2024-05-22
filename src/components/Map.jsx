import { Link, useLocation } from "react-router-dom";

const Map = ({ album, artist }) => {
  const location = useLocation().pathname;
  const previous = location.startsWith("/albums") ? "albums" : "artists";
  return (
    <nav className="flex gap-1 font-semibold uppercase text-xs mb-8">
      <Link className="hover:underline" to="/">
        home
      </Link>
      <p> → </p>
      <Link className="hover:underline" to={`/${previous}`}>
        {previous}
      </Link>
      <p> → </p>
      <p>
        {artist} - {album}
      </p>
    </nav>
  );
};
export default Map;

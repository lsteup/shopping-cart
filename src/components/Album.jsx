import { Link } from "react-router-dom";

const Album = ({ img, name, type, tracks, artist, id }) => {
  return (
    <Link
      to={`/albums/${id}`}
      className=" hover:underline  max-w-48 sm:max-w-64 "
    >
      <img className="border border-black   min-w-0 min-h-0" src={img} alt="" />
      <div className="mt-4 ">{artist}</div>
      <p className="text-xs font-light ">{name}</p>
      <p className="text-xs font-light capitalize">{type}</p>
      <p className="text-xs font-light ">{tracks} tracks</p>
    </Link>
  );
};
export default Album;

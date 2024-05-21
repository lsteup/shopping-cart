import { Link } from "react-router-dom";

const Album = ({ img, name, tracks, date, artist, id }) => {
  return (
    <Link
      to={`/albums/${id}`}
      className="hover:shadlow-3xl hover:scale-110 max-w-48 border border-gray-900 bg-slate-50 shadow-sm"
    >
      <img className="border-b border-gray-900" src={img} alt="" />
      <div className="p-2">
        <div className="text-base">{name}</div>
        <div className="text-gray-500">{artist}</div>
      </div>
    </Link>
  );
};
export default Album;

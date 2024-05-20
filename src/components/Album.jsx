import { Link } from "react-router-dom";

const Album = ({ img, name, tracks, date, artist, id }) => {
  return (
    <Link to={id} className="max-w-48 border-2 border-gray-900 bg-slate-50">
      <img className="border-b-2 border-gray-900" src={img} alt="" />
      <div className="p-2">
        <div className="text-base">{name}</div>
        <div className="text-gray-500">{artist}</div>
      </div>
    </Link>
  );
};
export default Album;

import { Link } from "react-router-dom";

const Album = ({ img, name, tracks, date, artist, id }) => {
  return (
    <Link
      to={`/albums/${id}`}
      className=" hover:underline hover:scale-110 max-w-48 "
    >
      <img
        className="border border-zinc-950 shadow-[rgba(0,0,0,0.22)_13px_8px_8px_-6px] -rotate-3 "
        src={img}
        alt=""
      />
      <div className="mt-8 text-base uppercase font-semibold">
        {artist} - {name}
      </div>
    </Link>
  );
};
export default Album;

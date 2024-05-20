import { Link } from "react-router-dom";

const AlbumsThumb = ({ albums }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-around">
      {albums.map((album) => {
        const id = album.id;
        const name = album.name;
        const img = album.images[1].url;
        return (
          <Link to={`/albums/${id}`}>
            <img className="max-h-40" src={img} alt="" />
            <div className="bg-slate-50 p-2 max-w-40">{name}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default AlbumsThumb;

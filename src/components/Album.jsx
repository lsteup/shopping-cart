const Album = ({ img, name, tracks, date, artist }) => {
  return (
    <article className="max-w-48 border-2 border-gray-900 rounded-md bg-slate-50">
      <img className="" src={img} alt="" />
      <div className="p-2">
        <div className="text-base">{name}</div>
        <div className="text-gray-500">{artist}</div>
      </div>
    </article>
  );
};
export default Album;

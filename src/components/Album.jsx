const Album = ({ img, name, tracks, date, artist }) => {
  return (
    <article>
      <img src={img} alt="" />
      <div>{name}</div>
      <div>{artist}</div>
      <div>{date}</div>
      <div>{tracks}</div>
    </article>
  );
};
export default Album;

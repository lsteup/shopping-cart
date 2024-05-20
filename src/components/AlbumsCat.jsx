import Album from "./Album";

export const AlbumsCat = ({ albums }) => {
  return (
    <section className="p5">
      {albums.map((album) => {
        const artist = album.artists[0].name;
        const name = album.name;
        const date = album.release_date;
        const img = album.images[0].url;
        const tracks = album.total_tracks;
        return (
          <Album
            img={img}
            name={name}
            artist={artist}
            date={date}
            tracks={tracks}
          />
        );
      })}
    </section>
  );
};

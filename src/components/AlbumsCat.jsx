import Album from "./Album";

export const AlbumsCat = ({ albums }) => {
  return (
    <section className="bg-amber-50 p-10 flex gap-10 flex-wrap justify-center">
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

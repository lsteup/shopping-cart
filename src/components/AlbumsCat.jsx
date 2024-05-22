import Album from "./Album";

export const AlbumsCat = ({ albums }) => {
  return (
    <section className="mt-5 p-10 px-24 grid grid-cols-[repeat(4,minmax(100px,500px))] gap-20  justify-center">
      {albums.map((album) => {
        const artist = album.artists[0].name;
        const name = album.name;
        const date = album.release_date;
        const img = album.images[0].url;
        const tracks = album.total_tracks;
        const id = album.id;
        return (
          <Album
            img={img}
            name={name}
            artist={artist}
            date={date}
            tracks={tracks}
            id={id}
            key={id}
          />
        );
      })}
    </section>
  );
};

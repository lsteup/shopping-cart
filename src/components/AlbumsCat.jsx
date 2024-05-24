import Album from "./Album";

export const AlbumsCat = ({ albums, cat }) => {
  return (
    <section className="mt-10 px-2 grid grid-cols-[repeat(2,minmax(100px,500px))] md:grid-cols-[repeat(5,minmax(100px,500px))] gap-4  justify-center">
      {albums.map((album) => {
        const artist = album.artists[0].name;
        const name = album.name;
        const date = album.release_date;
        const img = album.images[0].url;
        const id = album.id;
        const type = album.type;
        const tracks = album.total_tracks;
        return (
          <Album
            img={img}
            name={name}
            artist={artist}
            date={date}
            tracks={tracks}
            id={id}
            key={id}
            type={type}
            cat={cat}
          />
        );
      })}
    </section>
  );
};

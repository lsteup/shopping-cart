import album from "/Users/louisasteup/Desktop/shopping-cart/src/images/albumCover.jpeg";

const Hero = () => {
  return (
    <div className="border-4 rounded-lg p-6 border-slate-900 flex gap-10">
      <div>
        <p className="text-5xl font-semibold">
          Discover the{" "}
          <span className="underline decoration-orange-300">Soul</span> of{" "}
          <span className="underline decoration-orange-300">Music</span>
        </p>
        <p className="mt-6 text-gray-500">
          At Vinyl Haven, we believe in the magic of music. Our curated
          collection spans every genre, from timeless classics to the latest
          indie hits, providing a unique listening experience for every music
          lover. Whether you're a seasoned audiophile or a casual listener,
          you'll find something to spark your passion for sound.
        </p>
      </div>
      <img
        className="border-2 border-slate-900 object-cover aspect-square"
        src={album}
        alt=""
      />
    </div>
  );
};
export default Hero;

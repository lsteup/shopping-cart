import { Link } from "react-router-dom";
import record from "/Users/louisasteup/Desktop/shopping-cart/src/images/victrola-record-players-R4Rdi0EfBws-unsplash.jpg";

const Hero = () => {
  return (
    <div className=" p-10 border-4 rounded-lg border-slate-900 flex gap-16 lg:p-20 justify-around flex-wrap md:flex-nowrap md:flex-row-reverse">
      <img
        className="border-2 max-h-84 shrink-0 md:max-h-80 border-slate-900 object-cover aspect-square lg:max-h-96  min-w-0 min-h-0"
        src={record}
        alt=""
      />
      <div className="max-w-2xl flex flex-col gap-8 text-center md:text-start md:items-start leading-8 shrink justify-around items-center ">
        <p className="text-5xl lg:text-6xl font-semibold leading-tight lg:leading-normal">
          Discover the{" "}
          <span className="underline decoration-orange-300 decoration-4">
            Soul
          </span>{" "}
          of{" "}
          <span className="underline decoration-orange-300 decoration-4">
            Music
          </span>
        </p>
        <p className="hidden lg:block my-6 text-zinc-500  text-lg lg:leading-relaxed">
          At Vinyl Haven, we believe in the magic of music. Our curated
          collection spans every genre, from timeless classics to the latest
          indie hits, providing a unique listening experience for every music
          lover. Whether you're a seasoned audiophile or a casual listener,
          you'll find something to spark your passion for sound.
        </p>
        <Link
          to="albums"
          className="p-4 bg-orange-500 text-zinc-100 border-2 border-zinc-950 rounded-lg max-w-48 text-lg font-semibold flex align-middle justify-center hover:bg-orange-700"
        >
          Explore Albums
        </Link>
      </div>
    </div>
  );
};
export default Hero;

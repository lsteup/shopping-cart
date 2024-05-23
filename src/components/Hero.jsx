import { Link } from "react-router-dom";
import record from "/recordplayer.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className=" mx-auto p-10 border-4 mb-12  border-black flex gap-16 lg:p-20 justify-around flex-wrap md:flex-nowrap md:flex-row-reverse">
      <img
        className="border max-h-84 shrink-0 md:max-h-80 border-black object-cover aspect-square lg:max-h-96  min-w-0 min-h-0"
        src={record}
        alt=""
      />
      <div className="max-w-2xl flex flex-col gap-8 text-center md:text-start md:items-start leading-8 shrink justify-around items-center ">
        <p className="text-5xl lg:text-6xl font-semibold leading-tight lg:leading-normal">
          Discover the{" "}
          <span className="underline decoration-orange-500 decoration-4">
            Soul
          </span>{" "}
          of Music
        </p>
        <p className="hidden lg:block my-6 text-zinc-500  text-lg lg:leading-relaxed">
          At Vinyl Haven, we believe in the magic of music. Our curated
          collection spans every genre, from timeless classics to the latest
          indie hits, providing a unique listening experience for every music
          lover. Whether you're a seasoned audiophile or a casual listener,
          you'll find something to spark your passion for sound.
        </p>
        <Button link="albums" text="Explore Albums" />
      </div>
    </div>
  );
};
export default Hero;

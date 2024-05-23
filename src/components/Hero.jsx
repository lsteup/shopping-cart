import { Link } from "react-router-dom";
import record from "/recordplayer.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="md:w-4/5 mx-auto p-4 border-4 mb-12 my-4 border-black flex lg:flex-nowrap lg:w-5/6 gap-16 lg:p-20  justify-around md:items-center flex-wrap  md:flex-row-reverse">
      <img
        className="border max-h-84 shrink-0 sm:max-h-80 md:max-h-84 border-black object-cover aspect-square lg:max-h-96  min-w-0 min-h-0"
        src={record}
        alt=""
      />
      <div className="max-w-2xl flex flex-col gap-8 text-center md:text-start md:items-start leading-8 shrink justify-around items-center ">
        <p className="text-4xl lg:text-5xl font-semibold leading-tight lg:leading-normal">
          Discover the{" "}
          <span className="underline decoration-orange-500 decoration-4">
            Soul
          </span>{" "}
          of Music
        </p>
        <p className="hidden xl:block my-6 text-zinc-500  text-lg lg:leading-relaxed">
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

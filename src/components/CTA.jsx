import { Link } from "react-router-dom";
import Button from "./Button";

const CTA = ({ slogan, search, link, image }) => {
  return (
    <div className="flex  justify-between border-4 font-semibold  border-zinc-950 mt-4 p-10 items-center gap-6 grow text-center ">
      <div className="flex flex-col justify-between  font-semibold  items-center gap-6 grow text-center">
        <div>
          <p className="text-4xl">{slogan}</p>
        </div>

        <Button
          className="bg-orange-400 p-3 border-2 border-zinc-950 rounded-lg font-semibold hover:bg-orange-500 "
          to={link}
          text="Explore New Albums"
        >
          Explore {search}
        </Button>
      </div>
      <img
        className="hidden md:block lg:hidden xl:block max-w-72 border-2 border-zinc-950"
        src={image}
        alt=""
      />
    </div>
  );
};
export default CTA;

import { Link } from "react-router-dom";
import record from "/Users/louisasteup/Desktop/shopping-cart/src/images/record.jpg";

const CTA = ({ slogan, search, link }) => {
  return (
    <div className="bg-gradient-to-l from-orange-100 to-sky-100 flex flex-col justify-between border-2 rounded border-zinc-950 mt-4 p-10 items-center bg-orange-200">
      <div>
        <p className="text-4xl">{slogan}</p>
      </div>
      <Link
        className="bg-orange-300 p-3 border-2 border-zinc-950 rounded"
        to={link}
      >
        Explore {search}
      </Link>
    </div>
  );
};
export default CTA;

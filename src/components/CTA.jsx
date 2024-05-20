import { Link } from "react-router-dom";

const CTA = ({ slogan, search, link }) => {
  return (
    <div className="flex justify-between border-2 rounded border-slate-900 mt-4 p-10 items-center">
      <div>
        <p className="text-2xl">{slogan}</p>
      </div>
      <Link
        className="bg-orange-300 p-3 border-2 border-slate-900 rounded"
        to={link}
      >
        Explore {search}
      </Link>
    </div>
  );
};
export default CTA;

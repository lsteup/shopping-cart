import { Link } from "react-router-dom";

const Button = ({ link, text }) => {
  return (
    <Link
      to={link}
      className="p-4 bg-orange-500 text-zinc-100 border-2 border-zinc-950 rounded-lg max-w-48 text-lg font-semibold flex align-middle justify-center hover:bg-orange-700"
    >
      {text}
    </Link>
  );
};
export default Button;

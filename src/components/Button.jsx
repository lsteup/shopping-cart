import { Link } from "react-router-dom";

const Button = ({ link, text }) => {
  return (
    <Link
      to={link}
      className="mx-auto py-3 px-2 bg-white  border-2 border-orange-500  max-w-48 text-lg font-semibold flex align-middle justify-center hover:underline decoration-orange-500"
    >
      {text}
    </Link>
  );
};
export default Button;

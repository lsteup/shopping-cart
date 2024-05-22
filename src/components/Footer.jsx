import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-orange-500 p-4 text-zinc-50 justify-center text-xl flex items-center gap-4">
      <p> © lsteup</p>
      <FaGithub className="hover:scale-110" size="1.45em" />
      <FaLinkedin className="hover:scale-110" size="1.45em" />
    </div>
  );
};
export default Footer;

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const CompanyFooter = () => {
  return (
    <div className="bg-zinc-900">
      <div className="leading-7 text-zinc-400 font-light text-sm p-6 w-4/5 mx-auto ">
        <div className="sm:flex sm:justify-around">
          <div className="py-6">
            <p className="uppercase text-zinc-500 mb-4">Contact</p>
            <p className="">Vinyl Haven </p>
            <p>123 Music Lane</p>
            <p>Italy</p>
            <p>Tel:+39 9999999999</p>
            <p>info@vinylhaven.com</p>
          </div>
          <div className="">
            <p className="uppercase text-zinc-500 mb-4">Opening hours</p>
            <p>Monday 12.00 - 20.00</p>
            <p>Tuesday 10.30 - 20.00</p>
            <p>Wednesday 10.30 - 20.00</p>
            <p>Thursday 10.30 - 20.00</p>
            <p>Friday 10.30 - 20.00</p>
            <p>Saturday 10.30 - 20.00</p>
            <p>Sunday 12.00 - 20.00</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-6 ">
          <p> © lsteup</p>
          <FaGithub className="hover:scale-110" size="1.45em" />
          <FaLinkedin className="hover:scale-110" size="1.45em" />
        </div>
      </div>
    </div>
  );
};
export default CompanyFooter;

import Navbar from "../components/Navbar";
import CompanyFooter from "../components/CompanyFooter";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-gradient-to-r from-sky-50 to-orange-50 grow">
        <div className="mx-auto text-center my-16">
          <p className="my-8">
            Sorry, we can't seem to find the page you're looking for.
          </p>
          <Link
            to="/"
            className="bg-white text-stone-800 px-3 py-2 border-2 border-orange-500"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
      <CompanyFooter />
    </div>
  );
};
export default Error;

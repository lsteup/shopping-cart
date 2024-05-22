import CTA from "../components/CTA";
import Hero from "../components/Hero";
import record from "/record.jpg";
import singer from "/singer.jpg";

const LandingPage = () => {
  return (
    <div className="p-5 flex flex-wrap">
      <Hero />
      <div className="flex flex-wrap lg:flex-nowrap gap-4 ">
        <CTA
          slogan="Stay Ahead of the Beat"
          search="New Releases"
          link="/new"
          image={record}
        />
        <CTA
          slogan="Connect with Your Favorite Voices"
          search="Artists"
          link="/artists"
          image={singer}
        />
      </div>
    </div>
  );
};
export default LandingPage;

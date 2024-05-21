import CTA from "../components/CTA";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div className="p-5 bg-orange-50">
      <Hero />
      <div className="flex flex-wrap">
        <CTA
          slogan="Stay Ahead of the Beat"
          search="New Releases"
          link="/new"
        />
        <CTA
          slogan="Connect with Your Favorite Voices"
          search="Artists"
          link="/artists"
        />
      </div>
    </div>
  );
};
export default LandingPage;

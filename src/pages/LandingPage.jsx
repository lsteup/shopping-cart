import CTA from "../components/CTA";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div className="p-5 bg-orange-50">
      <Hero />
      <CTA slogan="Stay Ahead of the Beat" search="New Releases" link="/new" />
      <CTA
        slogan="Connect with Your Favorite Voices"
        search="Artists"
        link="/artists"
      />
      <CTA
        slogan="Dive into Musical Masterpiece"
        search="Albums"
        link="/albums"
      />
    </div>
  );
};
export default LandingPage;

import CTA from "../components/CTA";
import Hero from "../components/Hero";
import record from "/Users/louisasteup/Desktop/shopping-cart/src/images/record.jpg";
import singer from "/Users/louisasteup/Desktop/shopping-cart/src/images/singer.jpg";

const LandingPage = () => {
  return (
    <div className="p-5 bg-orange-50 lg:flex-wrap">
      <Hero />
      <div className="flex flex-row gap-4">
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

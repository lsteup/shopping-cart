import CTA from "../components/CTA";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import record from "/record.jpg";
import singer from "/singer.jpg";
import Deliveries from "../components/Deliveries";

const LandingPage = () => {
  return (
    <div className="p-5 flex flex-wrap">
      <Hero />
      <Feature title="Recommended" albumId="5eIZT2VKUxB8REoU0V1Qs2" />
      <Feature title="Record of the Week" albumId="6GosI4zndYwzR1ht3SOi8H" />

      <div className="flex flex-wrap lg:flex-nowrap gap-4 ">
        <CTA
          slogan="Stay Ahead of the Beat"
          search="New Releases"
          link="/new"
          image={record}
        />
      </div>
      <Deliveries />
    </div>
  );
};
export default LandingPage;

import CTA from "../components/CTA";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import record from "/record.jpg";
import singer from "/singer.jpg";
import Deliveries from "../components/Deliveries";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import photo1 from "/modal1.jpg";
import photo2 from "/modal2.jpg";
import photo3 from "/modal3.jpg";
import photo4 from "/modal4.jpg";
import photo5 from "/modal5.jpg";
import photo6 from "/modal6.jpg";

const LandingPage = () => {
  return (
    <>
      <Carousel
        className="w-full mx-auto"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        <div>
          <img
            className="max-h-44 sm:max-h-64 object-cover md:max-h-72 2xl:max-h-80"
            src={photo1}
            alt=""
          />
        </div>
        <div>
          <img
            className="max-h-44 sm:max-h-64 object-cover md:max-h-72 2xl:max-h-80"
            src={photo2}
            alt=""
          />
        </div>
        <div>
          <img
            className="max-h-44 sm:max-h-64 object-cover md:max-h-72 2xl:max-h-80"
            src={photo3}
            alt=""
          />
        </div>
        <div>
          <img
            className="max-h-44 sm:max-h-64 object-cover md:max-h-72 2xl:max-h-80"
            src={photo5}
            alt=""
          />
        </div>
        <div>
          <img
            className="max-h-44 sm:max-h-64 object-cover md:max-h-72 2xl:max-h-80"
            src={photo6}
            alt=""
          />
        </div>
      </Carousel>
      <div className="p-5 flex flex-wrap">
        <Hero />
        <div className="md:flex gap-4 justify-between w-4/5 mx-auto ">
          <Feature title="Recommended" albumId="5eIZT2VKUxB8REoU0V1Qs2" />
          <Feature
            title="Record of the Week"
            albumId="6GosI4zndYwzR1ht3SOi8H"
          />
        </div>

        <div className="flex flex-wrap lg:flex-nowrap gap-4 ">
          <CTA
            slogan="Stay Ahead of the Beat"
            search="New Releases"
            link="/new"
            image={record}
            title="New Releases"
          />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-4 ">
          <CTA link="/sale" image={record} id="sale" title="Sale" cat="sale" />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-4 ">
          <CTA link="/vintage" id="vintage" title="Vintage" cat="vintage" />
        </div>
        <Deliveries />
      </div>
    </>
  );
};
export default LandingPage;

import React, { useState } from "react";
import MultipleItems from "./Carousel";
import Navbar from "./templates/Navbar";
import Sidebar from "./templates/Sidebar";
import Footer from "./templates/Footer";

import Engine from "../assets/features/Engine.jpg";
import Materials from "../assets/features/Materials.jpg";
import Interior from "../assets/features/Interior.jpg";
import Exhaust from "../assets/features/exhaust.jpg";
import Exterior from "../assets/features/Exterior.jpg";
import Wheels from "../assets/features/wheels.jpg";
import topGear from "../assets/testimonials/topGear.svg";
import carNDriver from "../assets/testimonials/CarandDriver.png";
import motorTrend from "../assets/testimonials/motorTrend.png";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState({
    number: 1,
    caption: "LEGENDS NEVER DIE.",
    linkCaption: "BRABUS 900 R",
    link: "./products",
  });

  const handleButtonClick = (videoNumber, caption, linkCaption, link) => {
    setCurrentVideo({
      number: videoNumber,
      caption: caption,
      linkCaption: linkCaption,
      link: link,
    });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div id="videotron" className="w-full relative">
        <video loop autoPlay muted className="w-full h-[92vh] object-cover" key={currentVideo.number}>
          <source src={`video-hero${currentVideo.number}.mp4`} type="video/mp4" />
        </video>
        <figcaption className="absolute top-[60%] left-1/2 transform -translate-x-1/2 flex ">
          <h2 className="text-white text-3xl font-light">{currentVideo.caption}</h2>
        </figcaption>
        <div id="link-profile" className="w-40 absolute top-[69%] bg-black left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <a className="px-4 py-2 text-white inline-block" href={currentVideo.link}>
            {currentVideo.linkCaption}
          </a>
        </div>
        <div className="absolute top-[83%] left-1/2 transform -translate-x-1/2  flex justify-center mt-4 mx-auto">
          <button onClick={() => handleButtonClick(1, "LEGENDS  NEVER  DIE.", "BRABUS 900 R", "./products")} className="mx-2 px-4 py-2">
            <span className="block h-[5px] w-8 bg-slate-300 hover:bg-orange-700"></span>
          </button>
          <button onClick={() => handleButtonClick(2, "#SignatureNight23", "FULL SHOW", "https://www.youtube.com/watch?v=Rz7GExEtlUo")} className="mx-2 px-4 py-2 ">
            <span className="block h-[5px] w-8 bg-slate-300 hover:bg-orange-700"></span>
          </button>
          <button onClick={() => handleButtonClick(3, "THE WORLD OF BRABUS", "FULL VIDEO", "https://youtu.be/PzR-x-ADXrY?si=gjKvVfz9_UFtLCwt")} className="mx-2 px-4 py-2 ">
            <span className="block h-[5px] w-8 bg-slate-300 hover:bg-orange-700"></span>
          </button>
        </div>
        <div className="h-[8vh] flex justify-center items-center gap-20 border-b-2">
          <a className="py-2 px-4 block font-medium text-lg hover:bg-slate-200" href="#company-overview">
            OVERVIEW
          </a>
          <a className="py-2 px-4 block font-medium text-lg hover:bg-slate-200" href="#signature">
            SIGNATURE
          </a>
          <a className="py-2 px-4 block font-medium text-lg hover:bg-slate-200" href="#products">
            SUPERCARS
          </a>
          <a className="py-2 px-4 block font-medium text-lg hover:bg-slate-200" href="#media-review">
            MEDIA REVIEW
          </a>
        </div>
      </div>
      <section id="company-overview" className="mx-auto">
        <h2 className="font-medium text-center mt-16 pt-5 mb-12 text-3xl">UNLEASH THE BEAST | BRABUS OVERVIEW</h2>
        <div id="overview-grid" className="mx-auto">
          <div id="welcome" className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-2 text-center ">Welcome to Brabus Tuning</h2>
            <p className="text-lg">
              At Brabus, we don't just modify cars; we elevate them to unprecedented levels of performance, luxury, and style. With a legacy rooted in precision engineering and a passion for automotive innovation, Brabus Tuning stands as a
              beacon of excellence in the world of high-performance vehicles.
            </p>
          </div>
          <div id="history" className="max-w-3xl mx-auto mt-6 mb-10">
            <h2 className="text-2xl mb-2 text-center">Our Brief History</h2>
            <p className="text-justify text-lg">
              The company name was derived from the first three characters of the founders' surnames (<strong>Bra</strong>ckmann, <strong>Bus</strong>chmann). The company began with Bodo Buschmann wanting to customise his cars. Discovering
              most existing customisers could not grasp his vision or meet his requirements, he started his own brand. Brabus GmbH was registered in 1977 in West Germany with Buschmann's friend Klaus Brackmann to satisfy German law
              requiring a company to be established with at least two people.{" "}
            </p>
          </div>
          <div id="signature" className="bg-black text-gray-200 py-12">
            <div id="principles" className="">
              <h2 className="text-2xl mb-10 text-center font-semibold pt-8">THE BRABUS DIFFERENCE</h2>
              <div className="text-lg grid grid-cols-3 justify-items-center max-w-5xl mx-auto">
                <figure className="w-52 h-auto mb-10">
                  <img src={Engine} alt="" />
                  <figcaption className="mt-5">UNPARALLELED ENGINE PERFORMANCE.</figcaption>
                </figure>
                <figure className="w-52 h-auto mb-10">
                  <img src={Materials} alt="" />
                  <figcaption className="mt-5">MOST EXQUISITE MATERIALS AVAILABLE.</figcaption>
                </figure>
                <figure className="w-52 h-auto mb-10">
                  <img src={Exterior} alt="" />
                  <figcaption className="mt-5">EXTRAORDINARY EXTERIOR.</figcaption>
                </figure>
                <figure className="w-52 h-auto mb-10">
                  <img src={Wheels} alt="" />
                  <figcaption className="mt-5">WHEELS & CHASSIS. FORGED IN PERFECTION.</figcaption>
                </figure>
                <figure className="w-52 h-auto mb-10">
                  <img src={Interior} alt="" />
                  <figcaption className="mt-5">MASTERPIECE LUXURY INTERIOR.</figcaption>
                </figure>
                <figure className="w-52 h-auto mb-10">
                  <img src={Exhaust} alt="" />
                  <figcaption className="mt-5">PURE ADRENALINE EXHAUST SOUND.</figcaption>
                </figure>
              </div>
            </div>
            <div id="services" className="mt-16 max-w-3xl mx-auto pb-10">
              <h2 className="text-2xl mb-1 text-center font-semibold">Our Services</h2>
              <table className="min-w-full a">
                <tbody className="text-lg">
                  <tr className="">
                    <td className="px-6 py-2 align-text-top text-orange-800">Performance Tuning :</td>
                    <td className="px-6 py-2 align-text-top">Unleash the full potential of your vehicle with our expertly crafted performance tuning packages.</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-2 align-text-top text-orange-800">Aesthetic Enhancements :</td>
                    <td className="px-6 py-2 align-text-top">Elevate the visual appeal of your car with our custom body kits, wheels, and interior upgrades.</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-2 align-text-top text-orange-800">Exclusive Editions :</td>
                    <td className="px-6 py-2 align-text-top">Experience automotive luxury like never before with our limited-edition models, each a masterpiece in its own right.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="media-review" className="bg-testimonials-background">
        <h2 className="text-center pt-24 font-semibold text-gray-700 text-4xl">MEDIA REVIEW</h2>
        <h6 className="text-center text-xs">(Testimonials)</h6>
        <div id="cards" className="flex flex-row mt-36 justify-center gap-5 pb-24">
          <div id="card" className=" w-[350px]  text-center bg-[#e9ecef] bg-opacity-75">
            <img className="w-32 mx-auto py-4" src={carNDriver} alt="" />
            <p className="px-6 pb-6 ">
              In their latest review, Car and Driver Magazine showers praise on the Brabus 900 NLP 6x6 for its exceptional blend of power and refinement. The tech-savvy features, including comprehensive driver-assistance suite, left the reviewers thoroughly impressed. Car and Driver concludes that the Brabus 900 NLP 6x6 isn't just a car; it's a
              driving revelation, setting a thrilling standard for the modern, tech-forward enthusiast.
            </p>
          </div>
          <div id="card" className="w-[350px]  text-center bg-[#e9ecef] bg-opacity-75">
            <img className="w-32 mx-auto py-4" src={topGear} alt="" />
            <p className="px-6 pb-6 ">
              TopGear Magazine's latest review of the 900 R is nothing short of a love letter to automotive excellence. The editors are raving about the jaw-dropping performance, describing the engine's roar as a symphony of power. The
              cutting-edge technology leaves them spellbound, TopGear's verdict? 900 R is not just a car; it's a masterpiece on wheels, setting a new standard for performance and sophistication in the automotive world
            </p>
          </div>
          <div id="card" className="w-[350px]  text-center bg-[#e9ecef] bg-opacity-75">
            <img className="w-32 mx-auto py-4" src={motorTrend} alt="" />
            <p className="px-6 pb-6 ">
              MotorTrend Magazine is giving the praises of the Brabus 750 Bodo Buschmann Edition, declaring it a triumph in automotive engineering. The review emphasizes the Brabus 750 Bodo Buschmann Edition's blistering performance, with
              the roaring engine and precise handling turning every drive into a visceral adventure. The striking design doesn't just turn heads; it demands a second look. MotorTrend Magazine concludes that the Bodo Buschmann Edition
              ignites thrilling benchmark for performance enthusiasts.
            </p>
          </div>
        </div>
      </section>
      <section id="products">
        <MultipleItems />
        <div id="link-profile" className="w-40 top-[69%] bg-black flex items-center justify-center mx-auto mt-16 hover:bg-orange-600">
          <a className="px-4 py-2 text-white inline-block" href="">
            See More
          </a>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default HomePage;

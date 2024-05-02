import React from "react";
import heroImage from "../../assets/images/hero-image.jpg";
import { Link } from "react-router-dom";
import { heroCardLogos } from "../../constants/heroCardLogos";
import { heroTexts } from "../../constants/Text";

function Hero() {
  return (
    <div className="flex h-screen w-full items-center justify-between">

      <img
        width="1200"
        height="1200"
        src={heroImage}
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center "
      />

      <div className="container mx-auto -mt-52">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <div className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <h1 className="text-blue-gray lg:text-5xl font-sans font-semibold  !leading-snug text-3xl lg:max-w-3xl">
              {heroTexts.title}
            </h1>
            <p className="lead mb-10 mt-6 !text-gray-900 font-sans font-semibold">
              {heroTexts.description}
            </p>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Link
                to={"/#/products"}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              >
                view all products
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              {heroCardLogos.map((logo, index) => (
                <img
                  width="144"
                  height="144"
                  className="w-36 grayscale opacity-60"
                  key={index}
                  src={logo.image}
                  alt={logo.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

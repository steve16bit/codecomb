import React from "react";
import HeroExperiece from "./HeroExperiece";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center px-6 md:px-16 xl:px-32 gap-6 xl:gap-10">
      <div className="w-full xl:w-1/2">
        <div className="flex items-center gap-2 my-8 xl:my-10">
          <div className="w-2 h-6 rounded-sm bg-primary"></div>
          <div className="flex flex-col">
            <span>Welcome to <strong className="text-primary">CodeComb</strong></span>
            <span className="font-light">Where innovation meets excellence</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight xl:leading-20">
          Engineering <strong className="text-primary">Tomorrow's</strong>{" "}
        </h1>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight xl:leading-20">
          Digital <strong className="text-primary">Experiences.</strong>
        </h1>
        <p className="text-base xl:text-xl leading-7 xl:leading-8 mb-8 xl:mb-12 mt-4 font-light">
          Codecomb delivers robust, scalable, and efficient software solutions
          built with modern technologies and industry best practices. We turn
          complex challenges into elegant, high-performance applications that
          accelerate your growth.
        </p>
        <a className="mr-3 inline-flex cursor-pointer items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-secondary md:px-5 md:py-2.5 md:text-base lg:px-7 lg:py-3.5 lg:text-lg">
          Start your project
        </a>
        <a className="inline-flex cursor-pointer items-center justify-center rounded-2xl border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-black md:px-5 md:py-2.5 md:text-base lg:px-7 lg:py-3.5 lg:text-lg">
          View our work
        </a>
      </div>
      <div className="w-full xl:w-1/2 h-[400px] md:h-[500px] xl:h-[680px]">
        <HeroExperiece />
      </div>
    </div>
  );
};

export default Hero;

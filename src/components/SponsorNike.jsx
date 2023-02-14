/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NikeBalls from "../assets/images/combined_ball_image.png";

export default function SponsorNike() {
  return (
    <div className="container max-w-7xl p-1 mx-auto">
      <section className="h-full mt-12 p-5 px-8 flex flex-col bg-gradient-to-b from-premier-rose to-premier-orange">
        <div className="container mx-auto flex flex-row items-center justify-center space-y-8 lg:space-y-0 lg:flex-row lg:justify-between">
          <img src={NikeBalls} className="w-56" />
          <div className="p-4 text-white">
            <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
              Nike Ball Hub
            </h1>
            <h3>
              Discover the history of the Nike ball and its 23-year association
              with the Premier League, from the Nike Geo Merlin in 2000/01 to
              the Nike Flight in 2022/23.
            </h3>
          </div>
          <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-premier-primary dark:text-white">
            Contact
          </button>
        </div>
      </section>
    </div>
  );
}

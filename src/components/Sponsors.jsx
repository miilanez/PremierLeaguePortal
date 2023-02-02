import React from "react";
import EA from "../assets/images/sponsors/ea.png";
import Barclays from "../assets/images/sponsors/barclays.png";
import Nike from "../assets/images/sponsors/nike.png";
import Avery from "../assets/images/sponsors/avery.png";
import Budweiser from "../assets/images/sponsors/bud.png";
import Castrol from "../assets/images/sponsors/castrol.png";
import Hublot from "../assets/images/sponsors/hublot.png";
import Oracle from "../assets/images/sponsors/oracle.png";
import Panini from "../assets/images/sponsors/panini.png";
import Sorare from "../assets/images/sponsors/Sorare_Sponsor.png";

export default function Sponsors() {
  return (
    <div className="flex flex-col justify-center items-center px-4 divide-y dark:bg-footer dark:text-gray-100">
      <div className="items-center m-4">
        <h1 className="font-semibold text-2xl">Sponsors</h1>
      </div>
      <section className="w-full p-2 grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="flex justify-center items-center">
          <img className="w-20 h-20 p-2 " src={EA} />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-36 h-16 p-2" src={Avery} />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-36 h-12 p-2" src={Barclays} />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-36 h-16 p-2" src={Budweiser} />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-36 h-16 p-2" src={Castrol} />
        </div>
        <div className="flex justify-center items-center  ">
          <img className="w-28 h-20 p-2 " src={Hublot} />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-20 h-12 p-2" src={Nike} />
        </div>
        <div className="flex justify-center items-center ">
          <img className="w-28 h-20 p-2  " src={Oracle} />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-36 h-16 p-2" src={Panini} />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-36 h-16 p-2" src={Sorare} />
        </div>
      </section>
    </div>
  );
}

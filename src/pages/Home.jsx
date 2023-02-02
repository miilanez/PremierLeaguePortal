import React from "react";
import News from "../components/News";
import Standings from "../components/Standings";
import Nike from "../components/Nike";
import NextMatch from "../components/NextMatch";
import CardStats from "../components/CardStats";

const Home = () => {
  return (
    <div>
      <section className="h-full p-6 flex flex-col bg-gradient-to-r from-premier-green to-premier-light-blue">
        {/* Dividindo a tela em duas partes e executando responsividade para disp moveis */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* order-* altera a ordem em q a div será mostrada em tela. como se fosse o col-reverse */}
          <div className="md:mr-3 col-span-1 order-last md:order-1">
            <NextMatch />
            <Standings />
            <CardStats />
          </div>
          <div className="col-span-3 order-1 md:order-last">
            <News />
            <Nike />
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;

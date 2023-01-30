import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import News from "../components/News";
import Standings from "../components/Standings";

const Home = () => {
  return (
    <div>
      <section className="h-full bg-gradient-to-r from-premier-green to-premier-light-blue">
        {/* Dividindo a tela em duas partes e executando responsividade para disp moveis */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* order-* altera a ordem em q a div será mostrada em tela. como se fosse o col-reverse */}
          <div className="col-span-1 order-last md:order-1">
            <Standings />
          </div>
          <div className="col-span-2 order-1 md:order-last">
            <News />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

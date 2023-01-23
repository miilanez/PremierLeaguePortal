import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import News from "../components/News";
import Standings from "../components/Standings";

const Home = () => {
  return (
    <div>
      <section className="h-full bg-gradient-to-r from-premier-green to-premier-light-blue">
        <Grid container>
          <Grid item xs={3}>
            {/* <Standings /> */}
          </Grid>
          <Grid item xs={9}>
            <News />
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Home;

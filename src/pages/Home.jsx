import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import News from "../components/News";
import Standings from "../components/Standings";

const Home = () => {
  return (
    <div>
      <main className="h-full bg-gradient-to-r from-emerald-300 to-sky-500">
        <Grid container>
          <Grid item xs={3}>
            <Standings />
          </Grid>
          <Grid item xs={9}>
            <News />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Home;

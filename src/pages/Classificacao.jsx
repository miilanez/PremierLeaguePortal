import { Grid } from "@mui/material";
import React from "react";
import Standings from "../components/Standings";

const Classificacao = () => {
  return (
    <div>
      <div className=" p-4 flex justify-center items-center text-4xl">
        CLASSIFICAÇÃO E JOGOS
      </div>
      <Grid container>
        <Grid item xs={8}>
          <div className="p-4 w-full">
            <Standings />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="p-4 w-full">Tabela de Jogos </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Classificacao;

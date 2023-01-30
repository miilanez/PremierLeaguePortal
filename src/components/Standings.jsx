import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useState } from "react";
import useStandings from "../services/api/useStandings";

const columns = [
  {
    field: "Position",
    align: "center",
    width: 10,
    headerName: "",
    headerAlign: "center",
  },
  {
    field: "SquadLogo",
    render: (row) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        style={{ height: "25px", maxWidth: "25px" }}
        src={row.SquadLogo}
      ></img>
    ),
    align: "center",
    headerName: "",
    headerAlign: "center",
  },
  {
    field: "Name",
    align: "center",
    headerName: "Equipe",
    headerAlign: "center",
  },
  {
    field: "Points",
    align: "center",
    headerName: "Pontos",
    headerAlign: "center",
  },
  {
    field: "Played",
    align: "center",
    headerName: "Jogos",
    headerAlign: "center",
  },
  {
    field: "Winned",
    align: "center",
    headerName: "Vitórias",
    headerAlign: "center",
  },
  {
    field: "Tie",
    align: "center",
    headerName: "Empates",
    headerAlign: "center",
  },
  {
    field: "Loosed",
    align: "center",
    headerName: "Derrotas",
    headerAlign: "center",
  },
  {
    field: "Goal Difference",
    align: "center",
    headerName: "Saldo de Gols",
    headerAlign: "center",
  },
];

export default function Standings() {
  const [standing, setStanding] = useState([]);
  const { getStandings } = useStandings();

  useEffect(() => {
    async function fetch() {
      try {
        const dados = await getStandings();
        setStanding(dados);
      } catch (error) {
        console.log(error.message);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      // eslint-disable-next-line no-func-assign
      firstRequest = false;
      fetch();
    }
  }, [getStandings]);

  console.log("dados tabela", standing);

  return (
    <div className="p-6">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    backgroundColor: "#003049",
                    color: "white",
                  }}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {standing?.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                {columns.map(({ field, render }) => (
                  <TableCell align="center">
                    {!!render ? render(row) : row?.[field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

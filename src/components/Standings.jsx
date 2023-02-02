/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import useStandings from "../services/api/useStandings";
import PremierLeagueLongLogo from "../assets/images/premier-league-logo-header-full.png";

const columns = [
  {
    field: "Position",
    align: "center",
    width: 10,
    headerName: "Pos",
    headerAlign: "center",
  },
  {
    field: "SquadLogo",
    render: (row) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        style={{ height: "20px", maxWidth: "20px" }}
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
    headerName: "Club",
    headerAlign: "center",
  },
  {
    field: "Points",
    align: "center",
    headerName: "Pts",
    headerAlign: "center",
  },
  {
    field: "Played",
    align: "center",
    headerName: "Pl",
    headerAlign: "center",
  },
  // {
  //   field: "Winned",
  //   align: "center",
  //   headerName: "Vitórias",
  //   headerAlign: "center",
  // },
  // {
  //   field: "Tie",
  //   align: "center",
  //   headerName: "Empates",
  //   headerAlign: "center",
  // },
  // {
  //   field: "Loosed",
  //   align: "center",
  //   headerName: "Derrotas",
  //   headerAlign: "center",
  // },
  // {
  //   field: "Goal Difference",
  //   align: "center",
  //   headerName: "Saldo de Gols",
  //   headerAlign: "center",
  // },
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
    <div className="p-1 flex flex-col">
      <div id="top-standings" className="h-24 bg-premier-rose rounded-t-sm">
        <div className="flex items-center justify-center">
          <img className="h-14" src={PremierLeagueLongLogo} />
        </div>
        <div className="h-8 bg-white flex justify-center inset-x-0 bottom-0 mx-3 rounded-t-sm">
          <h1 className="text-premier-primary text-lg font-semibold">
            Standings
          </h1>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    backgroundColor: "#37003c",
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
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.name}
                sx={{
                  "&.MuiTableRow-root:hover": {
                    background: "linear-gradient(to right, #9B3BF9, #ff2882)",
                    cursor: "pointer",
                  },
                }}
              >
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

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Player from "../assets/images/p223094.png";

function createData(name, calories  ) {
  return { name, calories };
}

const rows = [
  createData("Club", "Club Name"),
  createData("Appearances", 237),
  createData("Goals", 262),
];

export default function CardStats() {
  return (
    <div className="p-1">
      <div className="max-w-lg p-2 shadow-md my-5 dark:bg-white dark:text-black">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize font-semibold"
            >
              Featured Player
            </a>
          </div>
        </div>
        <div className="">
          <div className="bg-footer bg-cover bg-center w-full h-40 flex flex-row">
            <div id="left-div" className="flex flex-col p-3 w-2/4 text-white">
              <h1 className="text-white font-bold text-lg">Name Player</h1>
              <h4 className="">Position</h4>
              <h3 className="mt-3">Country</h3>
            </div>
            <div
              id="right-div"
              className="w-2/4 flex justify-center items-center"
            >
              <img className="w-28" src={Player} />
            </div>
          </div>
          <div id="table" className="space-y-2">
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                {/* <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                  </TableRow>
                </TableHead> */}
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import "../Css/MarkerTable.css";

const MarkerTable = ({ markers, title }) => (
  <div>
    {!markers.length ? (
      <>
        <h3 className="table-title">{title}</h3>
        <Link to="/map">See markers</Link>
      </>
    ) : (
      <TableContainer component={Paper}>
        <h3 className="table-title">{title}</h3>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Latitude</TableCell>
              <TableCell>Longitude</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Event</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {markers.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.title}</TableCell>
                <TableCell component="th" scope="row">
                  {row.lat}
                </TableCell>
                <TableCell>{row.lng}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.event}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </div>
);

export default MarkerTable;

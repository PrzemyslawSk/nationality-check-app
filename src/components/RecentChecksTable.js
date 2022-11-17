import React from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TablePagination,
} from "@mui/material";
import ReactCountryFlag from "react-country-flag";

const RecentChecksTable = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <Typography variant="h6" sx={{ p: 2 }}>
        Recent searches
      </Typography>
      {props.recentChecks && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Best percentage</TableCell>
                <TableCell align="right">Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.recentChecks
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((record) => (
                  <TableRow key={record.date}>
                    <TableCell component="th" scope="row">
                      {record.date}
                    </TableCell>
                    <TableCell align="right">{record.name}</TableCell>
                    <TableCell align="right">
                      {`${Number(record.country[0].probability * 100).toFixed(
                        2
                      )} %`}
                    </TableCell>
                    <TableCell align="right">
                      <ReactCountryFlag
                        countryCode={record.country[0].country_id}
                        svg
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={props.recentChecks.length}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={page}
            onPageChange={handleChangePage}
          />
        </TableContainer>
      )}
    </Paper>
  );
};

export default RecentChecksTable;

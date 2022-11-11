import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import ReactCountryFlag from "react-country-flag";

const RecentChecksTable = (props) => {
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
              {props.recentChecks.map((record) => (
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
        </TableContainer>
      )}
    </Paper>
  );
};

export default RecentChecksTable;

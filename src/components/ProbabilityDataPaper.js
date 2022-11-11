import { Paper, Box, Typography, Skeleton, Grid } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

const ProbabilityDataPaper = (props) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {props.isLoading ? (
        <Box sx={{ width: "50%" /*POPRAWIĆ SZKIELET*/ }}>
          <Skeleton animation="wave" sx={{ marginBottom: 1 }} />
          <Skeleton animation="wave" sx={{ marginBottom: 1 }} />
          <Skeleton animation="wave" sx={{ marginBottom: 1 }} />
          <Skeleton animation="wave" sx={{ marginBottom: 1 }} />
          <Skeleton animation="wave" sx={{ marginBottom: 1 }} />
        </Box>
      ) : (
        props.probabilityData &&
        props.probabilityData.country.map((item) => {
          return (
            <Typography key={item.country_id} variant="h6">
              <Grid container>
                <Grid
                  item
                  xs={3}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ReactCountryFlag countryCode={item.country_id} svg />
                </Grid>
                <Grid item xs={6}>
                  {item.country_id}
                </Grid>
                <Grid item xs={3}>
                  {Number(item.probability * 100).toFixed(2)}%
                </Grid>
              </Grid>
            </Typography>
          );
        })
      )}
    </Paper>
  );
};

export default ProbabilityDataPaper;

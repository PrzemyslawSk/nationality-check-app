import { Paper, TextField, Button, Box, Typography } from "@mui/material";

const UserInputPaper = (props) => {
  return (
    <Paper
      sx={{
        pt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography data-testid="UserInputPaper--h5" variant="h5">
        Type name
      </Typography>
      <Box sx={{ mt: 1 }}>
        <TextField
          inputProps={{ "data-testid": "UserInputPaper--input" }}
          type="text"
          margin="normal"
          fullWidth
          label="Name"
          size="small"
          name="name"
          value={props.inputName.name}
          onChange={props.handleChange}
        />
        <Button
          data-testid="UserInputPaper--button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={props.onClickGetJson}
        >
          Check probability
        </Button>
      </Box>
    </Paper>
  );
};

export default UserInputPaper;

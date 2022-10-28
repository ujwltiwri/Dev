import * as React from "react";
import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function Upload() {
  return (
    <div style={{marginTop: ".5rem"}}>
      <Button
        variant="outlined"
        component="label"
        size="large"
        sx={{ mt: ".5rem" }}
        color="secondary"
      >
        <MovieIcon /> Upload Media
        <input hidden accept="video/*" multiple type="file" />
      </Button>
      <LinearProgress
        color="secondary"
        variant="determinate"
        value={80}
        sx={{ mt: "0.5rem", mb: "0.5rem" }}
      />
    </div>
  );
}

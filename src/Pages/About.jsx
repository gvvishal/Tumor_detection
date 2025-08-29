import React from "react";
import { Typography, Container } from "@mui/material";

function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3">About This Project</Typography>
      <Typography sx={{ mt: 2 }}>
        This web app uses deep learning models to detect brain tumors from MRI scans.
        Built with React, Vite, and Material UI.
      </Typography>
    </Container>
  );
}

export default About;

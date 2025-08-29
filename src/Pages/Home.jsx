import React from "react";
import UploadForm from "../Components/UploadForm";
import { Typography, Container } from "@mui/material";

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" align="center">Brain Tumor Detection</Typography>
      <Typography variant="h6" align="center" sx={{ mb: 4 }}>
        Upload an MRI scan to detect brain tumors
      </Typography>
      <UploadForm />
    </Container>
  );
}

export default Home; // ✅ Make sure this line exists


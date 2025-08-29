import React from "react";
import { Typography, Container, List, ListItem } from "@mui/material";

function HowItWorks() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3">How It Works</Typography>
      <List sx={{ mt: 2 }}>
        <ListItem>1. Upload an MRI scan of the brain.</ListItem>
        <ListItem>2. The image is sent to the backend for prediction.</ListItem>
        <ListItem>3. The model predicts whether a tumor is present.</ListItem>
        <ListItem>4. The result is displayed on the screen.</ListItem>
      </List>
    </Container>
  );
}

export default HowItWorks; // ✅ Make sure this line exists

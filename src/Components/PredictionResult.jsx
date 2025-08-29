import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function PredictionResult({ result }) {
  return (
    <Card sx={{ maxWidth: 400, margin: "20px auto", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6">Prediction Result:</Typography>
        <Typography variant="h4" color={result === "No Tumor" ? "green" : "red"}>
          {result}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PredictionResult;

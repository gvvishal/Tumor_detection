import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsightsIcon from "@mui/icons-material/Insights";
import SecurityIcon from "@mui/icons-material/Security";
import HealingIcon from "@mui/icons-material/Healing";

// Replace with your API Gateway URL (from Lambda trigger)
const API_URL = "https://vip0jliz09.execute-api.ap-south-1.amazonaws.com/default/MyfirstLambda"; 

function Home() {
  const [lambdaMessage, setLambdaMessage] = useState("Connecting...");

  useEffect(() => {
    const fetchLambda = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setLambdaMessage(data.message || "No message from Lambda");
      } catch (error) {
        console.error("Error fetching Lambda:", error);
        setLambdaMessage("❌ Failed to connect to Lambda");
      }
    };

    fetchLambda();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Brain Tumor Detection with AI
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Upload your MRI scans and let our deep learning model analyze them for potential tumor presence. 
              Fast, accurate, and secure — designed to assist doctors and patients in early diagnosis.
            </Typography>
            <Button
              component={Link}
              to="/upload"
              variant="contained"
              size="large"
              startIcon={<CloudUploadIcon />}
              sx={{ mt: 2, borderRadius: 2 }}
            >
              Upload MRI Scan
            </Button>

            {/* 🔗 Lambda Connection Test */}
            <Paper sx={{ mt: 4, p: 2, borderRadius: 2, backgroundColor: "grey.100" }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Lambda Connection Test:
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {lambdaMessage}
              </Typography>
            </Paper>
          </Grid>

          {/* Hero Image */}
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/free-vector/artificial-intelligence-ai-chip-technology-background_1017-23992.jpg"
              alt="AI Brain Tumor Detection"
              style={{ width: "100%", borderRadius: "16px", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }}
            />
          </Grid>
        </Grid>

        {/* Features Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
            Why Choose Our System?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
                <InsightsIcon sx={{ fontSize: 50, color: "primary.main" }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  High Accuracy
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Built with deep learning models trained on thousands of MRI scans to ensure reliable results.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
                <SecurityIcon sx={{ fontSize: 50, color: "primary.main" }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Secure & Private
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Your medical data is fully encrypted and never shared, ensuring patient confidentiality.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
                <HealingIcon sx={{ fontSize: 50, color: "primary.main" }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Early Diagnosis Aid
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Helps doctors make quicker and more informed decisions for timely treatment.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;


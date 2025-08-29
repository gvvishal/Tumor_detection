import React, { useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsightsIcon from "@mui/icons-material/Insights";
import SecurityIcon from "@mui/icons-material/Security";
import HealingIcon from "@mui/icons-material/Healing";

function Home() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* ===== HERO SECTION ===== */}
      <Box
        sx={{
          py: 10,
          background:
            "linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left Side Text */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
                sx={{ color: "primary.main" }}
              >
                AI-Powered Brain Tumor Detection
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
                paragraph
              >
                Early diagnosis saves lives. Our cutting-edge AI model analyzes
                MRI scans with remarkable accuracy, helping doctors make faster,
                more reliable decisions.
              </Typography>

              <Stack direction="row" spacing={2} mt={4}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    textTransform: "none",
                  }}
                  onClick={handleUploadClick}
                >
                  Upload MRI Scan
                </Button>
                <Link to="/accuracy" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: 3,
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      textTransform: "none",
                    }}
                  >
                    Learn More
                  </Button>
                </Link>
              </Stack>

              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept=".jpg,.png,.jpeg,.dcm"
              />
            </Grid>

            {/* Right Side Image */}
            <Grid item xs={12} md={6}>
              <img
                src="https://img.freepik.com/free-vector/artificial-intelligence-ai-chip-technology-background_1017-23992.jpg"
                alt="AI Brain Tumor Detection"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===== FEATURES ===== */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          Why Choose Our AI System?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
        >
          Designed with doctors and patients in mind, our platform ensures
          accurate detection, strong data privacy, and actionable insights.
        </Typography>

        <Grid container spacing={4}>
          {/* Card 1 */}
          <Grid item xs={12} md={4}>
            <Link to="/accuracy" style={{ textDecoration: "none" }}>
              <Paper
                sx={{
                  p: 5,
                  textAlign: "center",
                  borderRadius: 5,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <InsightsIcon sx={{ fontSize: 70, color: "primary.main" }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  High Accuracy
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Trained on thousands of MRI scans for consistent and
                  dependable diagnostic support.
                </Typography>
              </Paper>
            </Link>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} md={4}>
            <Link to="/security" style={{ textDecoration: "none" }}>
              <Paper
                sx={{
                  p: 5,
                  textAlign: "center",
                  borderRadius: 5,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <SecurityIcon sx={{ fontSize: 70, color: "primary.main" }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Secure & Private
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Patient data is encrypted and confidential — we prioritize your
                  privacy at every step.
                </Typography>
              </Paper>
            </Link>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} md={4}>
            <Link to="/diagnosis" style={{ textDecoration: "none" }}>
              <Paper
                sx={{
                  p: 5,
                  textAlign: "center",
                  borderRadius: 5,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <HealingIcon sx={{ fontSize: 70, color: "primary.main" }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Early Diagnosis Aid
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Detects potential tumors early, empowering doctors with
                  insights for faster treatment.
                </Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Container>

      {/* ===== HOW IT WORKS ===== */}
      <Box sx={{ mt: 14, py: 10, bgcolor: "#f9fafc" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            How It Works
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
          >
            A simple 3-step process to get instant AI-powered insights from your
            MRI scans.
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={4} textAlign="center">
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                1. Upload Scan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Upload your MRI securely through our encrypted system.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                2. AI Analysis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our deep learning model analyzes the scan within seconds.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                3. Get Results
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Receive detailed insights that help guide further medical
                decisions.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===== CALL TO ACTION ===== */}
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: "auto", mb: 3 }}
        >
          Upload your MRI scan today and experience the power of AI in early
          brain tumor detection.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: 3,
            px: 5,
            py: 1.5,
            fontSize: "1.1rem",
            textTransform: "none",
          }}
          onClick={handleUploadClick}
        >
          Upload Scan
        </Button>
      </Box>

      {/* ===== FOOTER ===== */}
      <Box
        sx={{
          py: 4,
          textAlign: "center",
          borderTop: "1px solid #eee",
          color: "text.secondary",
          bgcolor: "#fafafa",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Brain Tumor Detection System. All Rights
          Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;


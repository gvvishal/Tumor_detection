import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import MemoryIcon from '@mui/icons-material/Memory'; // Brain/AI icon

function Navbar() {
  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo + Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MemoryIcon sx={{ fontSize: 32 }} />
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 600 }}>
            Brain Tumor Detection
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about" 
            sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/how-it-works" 
            sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
          >
            How It Works
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

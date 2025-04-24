import React from "react";
import { Box, Card, CardContent, Typography, Grid, CardHeader, LinearProgress, IconButton } from "@mui/material";
import { People, School, Business } from "@mui/icons-material";  // Example icons
import { motion } from "framer-motion"; // For smoother animations

// Dummy Data for Analytics
const analyticsData = [
  { title: "Total Users", count: 1250, icon: <People />, color: "#1976d2", progress: 0.75 },
  { title: "Active Courses", count: 18, icon: <School />, color: "#9c27b0", progress: 0.6 },
  { title: "Inactive Companies", count: 5, icon: <Business />, color: "#f44336", progress: 0.3 },
];

const AnalyticsPanel = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" fontWeight="600" gutterBottom>
        Analytics Overview
      </Typography>

      {/* Use Grid for responsive layout */}
      <Grid container spacing={3}>
        {analyticsData.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            {/* Motion Card for smooth animations */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card sx={{ borderRadius: 3, boxShadow: 5, transition: "all 0.3s ease", overflow: "hidden" }}>
                <CardHeader
                  avatar={
                    <Box
                      sx={{
                        backgroundColor: item.color,
                        borderRadius: "50%",
                        padding: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {item.icon}
                    </Box>
                  }
                  title={
                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                      {item.title}
                    </Typography>
                  }
                  sx={{
                    backgroundColor: item.color,
                    color: "white",
                    padding: 2,
                  }}
                />
                <CardContent sx={{ padding: 3 }}>
                  <Typography variant="h4" fontWeight="600" color="text.primary">
                    {item.count}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {item.title} count
                  </Typography>

                  {/* Progress Bar */}
                  <Box mt={2}>
                    <LinearProgress
                      variant="determinate"
                      value={item.progress * 100}
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 5,
                          backgroundColor: item.color,
                        },
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AnalyticsPanel;

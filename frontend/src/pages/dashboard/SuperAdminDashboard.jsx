import AdminLayout from "../../layouts/AdminLayout";
import { Box, Typography, Paper } from "@mui/material";

const SuperAdminDashboard = () => {
  return (
    <AdminLayout>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Welcome, SuperAdmin 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          You have full access to manage companies, courses, analytics, and user roles.
        </Typography>
      </Paper>
    </AdminLayout>
  );
};

export default SuperAdminDashboard;

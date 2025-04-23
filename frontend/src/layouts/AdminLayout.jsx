import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar takes fixed space */}
      <Sidebar />

      {/* Main content fills remaining space */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            overflowY: "auto",
            bgcolor: "#f4f6f8"
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;

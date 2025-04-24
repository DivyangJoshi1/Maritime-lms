import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Fixed Header */}
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 240, // match sidebar width
            right: 0,
            height: "64px", // match header height
            zIndex: 1100,
            bgcolor: "#fff",
            boxShadow: 1,
          }}
        >
          <Header />
        </Box>

        {/* Scrollable Main Content */}
        <Box
          component="main"
          id="dashboard-main-content"
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            bgcolor: "#f4f6f8",
            paddingTop: "64px", // matches header height exactly
            paddingX: 3,
            paddingBottom: 4,
            scrollBehavior: "smooth",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;

import React, { useState, useContext } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  Announcement as AnnouncementIcon,
  History as HistoryIcon,
  ExitToApp as ExitToAppIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { DashboardScrollContext } from "../context/DashboardScrollContext"; // Create context

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const scrollRefs = useContext(DashboardScrollContext);

  const handleScroll = (key) => {
    if (scrollRefs && scrollRefs[key]?.current) {
      scrollRefs[key].current.scrollIntoView({ behavior: "smooth" });
    }
    setActiveItem(key);
  };

  const handleLogout = () => {
    // Clear tokens / session data if needed
    localStorage.removeItem("token"); // or sessionStorage, etc.
    navigate("/login"); // Redirect to login page
  };

  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        bgcolor: "#0f172a",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        paddingTop: 3,
        boxShadow: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", pb: 2 }}>
        <PersonIcon sx={{ width: 50, height: 50, backgroundColor: "#374151", borderRadius: "50%", p: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", ml: 2 }}>
          SuperAdmin
        </Typography>
      </Box>

      <List sx={{ flexGrow: 1 }}>
        {[
          { key: "overview", icon: <DashboardIcon />, label: "Dashboard Overview" },
          { key: "courses", icon: <SchoolIcon />, label: "Course Management" },
          { key: "analytics", icon: <AnnouncementIcon />, label: "Analytics Overview" },
          { key: "logs", icon: <HistoryIcon />, label: "Recent Activity Logs" },
          { key: "crew", icon: <PeopleIcon />, label: "Crew Members Management" },
          { key: "notices", icon: <AnnouncementIcon />, label: "Notices & Announcements" },
        ].map(({ key, icon, label }) => (
          <ListItem
            button
            key={key}
            selected={activeItem === key}
            onClick={() => handleScroll(key)}
            sx={{
              "&:hover": {
                backgroundColor: "#374151", // Highlight background on hover
                cursor: "pointer", // Change cursor to pointer on hover
              },
              "&.Mui-selected": {
                backgroundColor: "#374151", // Keep the highlighted background when selected
              },
              paddingY: 1, // Adjust padding for better alignment
            }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 28 }}>{icon}</ListItemIcon> {/* Icon size adjustment */}
            <ListItemText primary={label} sx={{ fontSize: 14 }} /> {/* Font size control */}
          </ListItem>
        ))}
      </List>

      <Box sx={{ marginTop: "auto", paddingBottom: 2 }}>
        <List>
          <ListItem
            button
            onClick={handleLogout}
            sx={{
              paddingY: 1, // Padding to align logout button
              "&:hover": {
                backgroundColor: "#374151",
                cursor: "pointer", // Change cursor on hover
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff", fontSize: 28 }}>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              sx={{
                fontSize: 14, // Adjust the font size to avoid overflow
                color: "#fff",
                marginLeft: 1, // Adjust the margin to keep the text in line
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

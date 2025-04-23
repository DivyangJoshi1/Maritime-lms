import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 220,
        height: "100vh",
        bgcolor: "#1e293b",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* Add more menu items here */}
      </List>
    </Box>
  );
};

export default Sidebar;

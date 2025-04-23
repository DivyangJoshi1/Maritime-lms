import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#1976d2",
        borderBottom: "1px solid #e0e0e0",
        px: 3,
        height: "64px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Toolbar disableGutters sx={{ minHeight: "64px", display: "flex", alignItems: "center" }}>
        <Typography variant="h6" fontWeight={600}>
          Maritime LMS — SuperAdmin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import BusinessIcon from "@mui/icons-material/Business";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const stats = [
  {
    title: "Total Users",
    count: 245,
    icon: <GroupIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    bgColor: "#e3f2fd",
  },
  {
    title: "Total Companies",
    count: 12,
    icon: <BusinessIcon sx={{ fontSize: 40, color: "#2e7d32" }} />,
    bgColor: "#e8f5e9",
  },
  {
    title: "Courses",
    count: 18,
    icon: <MenuBookIcon sx={{ fontSize: 40, color: "#f9a825" }} />,
    bgColor: "#fffde7",
  },
  {
    title: "Active Sub-Admins",
    count: 6,
    icon: <AdminPanelSettingsIcon sx={{ fontSize: 40, color: "#6a1b9a" }} />,
    bgColor: "#f3e5f5",
  },
];

const OverviewWidgets = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {stats.map((item, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 3,
              backgroundColor: item.bgColor,
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
              },
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                {item.icon}
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    {item.title}
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {item.count}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OverviewWidgets;

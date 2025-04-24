import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
  } from "@mui/material";
  import { Business, School, Delete, PersonAdd } from "@mui/icons-material";
  import { motion } from "framer-motion";
  
  const activities = [
    {
      type: "add_company",
      message: "Added new company: Oceanic Logistics",
      timestamp: "2 hours ago",
      icon: <Business />,
      color: "primary.main",
    },
    {
      type: "add_course",
      message: "Published new course: Marine Safety 101",
      timestamp: "5 hours ago",
      icon: <School />,
      color: "success.main",
    },
    {
      type: "user_register",
      message: "New crew member registered: Jane Doe",
      timestamp: "Yesterday",
      icon: <PersonAdd />,
      color: "info.main",
    },
    {
      type: "delete_user",
      message: "Deleted user: John Smith",
      timestamp: "2 days ago",
      icon: <Delete />,
      color: "error.main",
    },
  ];
  
  const ActivityLogs = () => {
    return (
      <Box mt={6}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 10,
              mb: 4,
              overflow: "hidden",
              background: "linear-gradient(to right, #ffffff, #f3f3f3)",
            }}
          >
            <CardHeader
              title="Recent Activity Logs"
              titleTypographyProps={{
                variant: "h6",
                sx: { fontWeight: "bold", color: "text.primary" },
              }}
              sx={{
                backgroundColor: "#e0f7fa",
                borderBottom: "1px solid #ddd",
                px: 3,
                py: 2,
              }}
            />
  
            <CardContent sx={{ px: 3, py: 2, maxHeight: 320, overflowY: "auto" }}>
              <List disablePadding>
                {activities.map((activity, index) => (
                  <Box key={index}>
                    <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: activity.color }}>
                          {activity.icon}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" fontWeight="500">
                            {activity.message}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="caption" color="text.secondary">
                            {activity.timestamp}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index !== activities.length - 1 && <Divider sx={{ my: 1 }} />}
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    );
  };
  
  export default ActivityLogs;
  
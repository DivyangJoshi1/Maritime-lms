import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Typography,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Tooltip,
    Button,
  } from "@mui/material";
  import { Delete, AddCircleOutline } from "@mui/icons-material";
  import { motion } from "framer-motion";
  import AddNoticeModal from "./AddNoticeModal";
  import { useState } from "react";
  
  // Dummy data for notices
  const notices = [
    {
      id: 1,
      title: "Scheduled Maintenance",
      description: "Platform will be under maintenance on 25th April from 12AM to 4AM.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "New Policy Update",
      description: "Updated crew member guidelines released. Check your email.",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      title: "Upcoming Training",
      description: "Mandatory fire safety training scheduled next week.",
      timestamp: "3 days ago",
    },
  ];
  
  const NoticesPanel = () => {
    const [openModal, setOpenModal] = useState(false);
    const [noticeList, setNoticeList] = useState(notices);
  
    const handleAddNotice = (newNotice) => {
      setNoticeList((prev) => [newNotice, ...prev]);
    };
  
    return (
      <Box mt={6}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card sx={{ borderRadius: 3, boxShadow: 10 }}>
            <CardHeader
              title="Notices & Announcements"
              titleTypographyProps={{
                variant: "h6",
                sx: { fontWeight: "bold" },
              }}
              action={
                <Tooltip title="Add Notice">
                  <IconButton color="primary" onClick={() => setOpenModal(true)}>
                    <AddCircleOutline />
                  </IconButton>
                </Tooltip>
              }
              sx={{
                borderBottom: "1px solid #ddd",
                px: 3,
                py: 2,
                backgroundColor: "#f5faff",
              }}
            />
  
            <CardContent sx={{ px: 3, py: 2 }}>
              <List>
                {noticeList.map((notice, index) => (
                  <Box key={notice.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" fontWeight={600}>
                            {notice.title}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              gutterBottom
                            >
                              {notice.description}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {notice.timestamp}
                            </Typography>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Tooltip title="Delete">
                          <IconButton edge="end" color="error">
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                    {index !== noticeList.length - 1 && (
                      <Divider sx={{ my: 1 }} />
                    )}
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </motion.div>
        {/* AddNoticeModal */}
        <AddNoticeModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={handleAddNotice}
        />
      </Box>
    );
  };
  
  export default NoticesPanel;
  
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import AddCourseModal from "./AddCourseModal";  // Import the AddCourseModal component

const dummyCourses = [
  {
    id: 1,
    title: "Maritime Safety Basics",
    category: "Safety",
    duration: "3 weeks",
    status: "Active",
  },
  {
    id: 2,
    title: "Navigation and Operations",
    category: "Navigation",
    duration: "4 weeks",
    status: "Inactive",
  },
  {
    id: 3,
    title: "Emergency Response Training",
    category: "Safety",
    duration: "2 weeks",
    status: "Active",
  },
];

const CourseList = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State to control modal visibility

  const handleOpenModal = () => setIsAddModalOpen(true); // Open the modal
  const handleCloseModal = () => setIsAddModalOpen(false); // Close the modal

  return (
    <Box mt={5}>
      {/* Top Heading and Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Courses
        </Typography>
        <Button variant="contained" onClick={handleOpenModal}>
          Add Course
        </Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyCourses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>{course.duration}</TableCell>
                <TableCell>
                  <Chip
                    label={course.status}
                    color={course.status === "Active" ? "success" : "default"}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton color="primary" size="small">
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton color="error" size="small">
                    <Delete fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Course Modal */}
      <AddCourseModal open={isAddModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default CourseList;

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const AddCourseModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    duration: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCourse = () => {
    console.log("New Course Data:", formData);
    onClose(); // Close the modal
  };

  useEffect(() => {
    if (!open) {
      setFormData({
        title: "",
        instructor: "",
        duration: "",
        description: "",
      });
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle fontWeight="bold">Add New Course</DialogTitle>

      <DialogContent sx={{ py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Course Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Instructor Name"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Duration (e.g., 6 weeks)"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color="error" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleAddCourse} variant="contained">
          Add Course
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCourseModal;

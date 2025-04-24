import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
  } from "@mui/material";
  import { useState } from "react";
  
  const AddNoticeModal = ({ open, onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = () => {
      if (!title.trim() || !description.trim()) return;
      const newNotice = {
        id: Date.now(),
        title,
        description,
        timestamp: "Just now", // Placeholder
      };
      onSubmit(newNotice);
      setTitle("");
      setDescription("");
      onClose();
    };
  
    const handleClose = () => {
      setTitle("");
      setDescription("");
      onClose();
    };
  
    return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New Notice</DialogTitle>
        <DialogContent>
          <Box mt={1} display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={4}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Add Notice
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default AddNoticeModal;
  
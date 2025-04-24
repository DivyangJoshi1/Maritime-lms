import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    MenuItem,
  } from "@mui/material";
  import { useState, useEffect } from "react";
  
  const ranks = ["Captain", "First Officer", "Engineer", "Deckhand"];
  
  const EditCrewMemberModal = ({ open, handleClose, member, onSave }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      rank: "",
      status: "",
    });
  
    useEffect(() => {
      if (member) {
        setFormData({
          name: member.name,
          email: member.email,
          rank: member.rank,
          status: member.status,
        });
      }
    }, [member]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = () => {
      onSave({ ...member, ...formData });
      handleClose();
    };
  
    return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Crew Member</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Rank"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
            select
            fullWidth
          >
            {ranks.map((rank) => (
              <MenuItem key={rank} value={rank}>
                {rank}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            select
            fullWidth
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default EditCrewMemberModal;
  
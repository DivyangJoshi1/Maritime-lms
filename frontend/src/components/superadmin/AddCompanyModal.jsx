import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Box
  } from "@mui/material";
  import { useState } from "react";
  
  const AddCompanyModal = ({ open, handleClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      role: "CompanyAdmin",
    });
  
    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleSubmit = () => {
      console.log("Mock submit: ", formData);
      handleClose();
    };
  
    return (
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Company</DialogTitle>
        <DialogContent>
          <Box component="form" display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField
              name="name"
              label="Company Name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              name="email"
              label="Admin Email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Add Company
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default AddCompanyModal;
  
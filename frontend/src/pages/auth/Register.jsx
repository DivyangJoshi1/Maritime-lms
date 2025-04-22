import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
  Link,
} from '@mui/material';
import { registerUser } from '../../services/authService';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'CrewMember',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await registerUser(formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f6f8',
      }}
    >
      <Paper
  elevation={5}
  sx={{
    width: '100%',
    maxWidth: 380,
    minHeight: 360, // smaller box like login
    p: 3,            // slightly reduced padding
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }}
>
  <Typography
    variant="h5"
    align="center"
    sx={{ mb: 2.5, fontWeight: '600' }}
  >
    Create Account
  </Typography>

  <form onSubmit={handleSubmit}>
    <TextField
      label="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      fullWidth
      margin="normal"
      required
      size="small"
    />
    <TextField
      label="Email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      fullWidth
      margin="normal"
      required
      size="small"
    />
    <TextField
      label="Password"
      name="password"
      type="password"
      value={formData.password}
      onChange={handleChange}
      fullWidth
      margin="normal"
      required
      size="small"
    />
    <TextField
      label="Confirm Password"
      name="confirmPassword"
      type="password"
      value={formData.confirmPassword}
      onChange={handleChange}
      fullWidth
      margin="normal"
      required
      size="small"
    />
    <TextField
      select
      label="Role"
      name="role"
      value={formData.role}
      onChange={handleChange}
      fullWidth
      margin="normal"
      SelectProps={{ native: true }}
      required
      size="small"
    >
      <option value="SuperAdmin">SuperAdmin</option>
      <option value="SubAdmin">SubAdmin</option>
      <option value="CompanyAdmin">CompanyAdmin</option>
      <option value="CrewMember">CrewMember</option>
    </TextField>

    {error && (
      <Typography
        color="error"
        variant="body2"
        align="center"
        sx={{ mt: 1 }}
      >
        {error}
      </Typography>
    )}

    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 2, py: 1 }}
    >
      Register
    </Button>

    <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
      <Grid item>
        <Link
          onClick={() => navigate('/login')}
          variant="body2"
          sx={{ cursor: 'pointer' }}
        >
          Already have an account? Login
        </Link>
      </Grid>
    </Grid>
  </form>
</Paper>
    </Box>
  );
};

export default Register;

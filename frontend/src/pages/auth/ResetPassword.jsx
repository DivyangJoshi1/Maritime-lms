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
import { resetPassword } from '../../services/authService';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    oldPassword: '',
    newPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await resetPassword(formData);
      setSuccess(res.msg);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Password reset failed');
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
          maxWidth: 360,
          minHeight: 360,
          p: 4,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" align="center" sx={{ mb: 3, fontWeight: 'bold' }}>
          Reset Password
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            label="Old Password"
            name="oldPassword"
            type="password"
            value={formData.oldPassword}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            label="New Password"
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleChange}
            fullWidth
            margin="dense"
            required
          />

          {error && (
            <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success.main" variant="body2" align="center" sx={{ mt: 1 }}>
              {success}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, py: 1.2 }}
          >
            Reset Password
          </Button>

          <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
            <Grid item>
              <Link onClick={() => navigate('/login')} variant="body2" sx={{ cursor: 'pointer' }}>
                Back to Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default ResetPassword;

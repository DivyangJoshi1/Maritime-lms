import { useState, useContext } from 'react';
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
import { loginUser } from '../../services/authService';
import { AuthContext } from '../../context/AuthContext';
import bgImage from '../../assets/bg.jpeg';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      login(res);

      // redirect based on role
      if (res.user.role === 'SuperAdmin') navigate('/dashboard/superadmin');
      else if (res.user.role === 'CompanyAdmin') navigate('/dashboard/companyadmin');
      else if (res.user.role === 'SubAdmin') navigate('/dashboard/subadmin');
      else if (res.user.role === 'CrewMember') navigate('/dashboard/crew');
      else navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
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
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.5)',
        zIndex: -1,
      },
    }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 3, // Adjusted padding to give more breathing space inside the box
          width: '100%',
          maxWidth: 340, // Adjusted to make it more compact
          borderRadius: 2,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '1.5rem',
          }}
        >
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3f51b5',
                },
              },
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3f51b5',
                },
              },
            }}
          />
          {error && (
            <Typography
              color="error"
              variant="body2"
              align="center"
              sx={{ mb: 2 }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              padding: '12px',
              backgroundColor: '#3f51b5',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#303f9f',
              },
            }}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
            <Grid item>
              <Link
                onClick={() => navigate('/register')}
                variant="body2"
                sx={{
                  cursor: 'pointer',
                  color: '#3f51b5',
                  fontWeight: 'bold',
                }}
              >
                Don’t have an account? Register
              </Link>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
            <Grid item>
              <Link
                onClick={() => navigate('/reset-password')}
                variant="body2"
                sx={{
                  cursor: 'pointer',
                  color: '#3f51b5',
                  fontWeight: 'bold',
                }}
              >
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;

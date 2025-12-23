// import React from "react";
// import {
//   Box,
//   Button,
//   Divider,
//   IconButton,
//   InputAdornment,
//   Link,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import AuthLayout from "../../authLayout/index";

// export default function Signup() {
//   const [showPassword, setShowPassword] = React.useState(false);

//   return (
//     <AuthLayout
//       title="Create your account"
//       subtitle="Join us and get started in minutes."
//       imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
//     >
//       <Stack spacing={2.2}>
//         <Box>
//           <Typography variant="h5" fontWeight={700}>
//             Sign up
//           </Typography>
//           <Typography color="text.secondary" sx={{ mt: 0.5 }}>
//             Create a new account
//           </Typography>
//         </Box>

//         <TextField label="Full name" fullWidth autoComplete="name" />
//         <TextField label="Email" type="email" fullWidth autoComplete="email" />

//         <TextField
//           label="Password"
//           type={showPassword ? "text" : "password"}
//           fullWidth
//           autoComplete="new-password"
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword((s) => !s)} edge="end">
//                   {showPassword ? (
//                     <VisibilityOffOutlinedIcon />
//                   ) : (
//                     <VisibilityOutlinedIcon />
//                   )}
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />

//         <Button variant="contained" size="large" fullWidth>
//           Create account
//         </Button>

//         <Divider sx={{ my: 0.5 }}>or</Divider>

//         <Button variant="outlined" size="large" fullWidth>
//           Sign up with Google
//         </Button>

//         <Typography variant="body2" color="text.secondary" textAlign="center">
//           Already have an account?{" "}
//           <Link href="/login" underline="hover" fontWeight={700}>
//             Login
//           </Link>
//         </Typography>
//       </Stack>
//     </AuthLayout>
//   );
// }


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Divider,
  Link,
  Checkbox,
  FormControlLabel,
  Grid
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Lock,
  Email,
  Person,
  Google,
  Facebook
} from '@mui/icons-material';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Signup submitted:', formData);
      alert('Signup successful!');
    }
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Left Side - Image (60%) */}
      <Grid 
        item 
        xs={12} 
        md={9}
        sx={{
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.9) 0%, rgba(21, 101, 192, 0.9) 100%), url("https://images.unsplash.com/photo-1557683316-973673baf926?w=1200")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: 4
        }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: 600 }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Join Us Today!
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Create an account and unlock amazing features tailored just for you
          </Typography>
        </Box>
      </Grid>

      {/* Right Side - Signup Form (40%) */}
      <Grid 
        item 
        xs={12} 
        md={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 4,
          backgroundColor: '#fff',
          overflowY: 'auto'
        }}
      >
        <Box sx={{ maxWidth: 450, margin: '0 auto', width: '100%' }}>
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                boxShadow: 3
              }}
            >
              <Person sx={{ color: 'white', fontSize: 30 }} />
            </Box>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              Sign Up
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Create your account to get started
            </Typography>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                )
              }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                )
              }}
            />

            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <Typography variant="body2">
                  I agree to the{' '}
                  <Link href="#" underline="hover">
                    Terms and Conditions
                  </Link>
                </Typography>
              }
              sx={{ mt: 1 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6
                }
              }}
            >
              Sign Up
            </Button>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography variant="body2" color="text.secondary">
                Already have an account?{' '}
                <Link
                  component="button"
                  type="button"
                  onClick={() => navigate('/login')}
                  sx={{
                    color: '#9c27b0',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
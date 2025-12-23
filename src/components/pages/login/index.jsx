// import React from "react";
// import {
//   Box,
//   Button,
//   IconButton,
//   InputAdornment,
//   Link,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import AuthLayout from "../../authLayout/index";

// export default function Login() {
//   const [showPassword, setShowPassword] = React.useState(false);

//   return (
//     <AuthLayout
//       imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
//     >
//       <Stack spacing={3}>
//         {/* Heading */}
//         <Box>
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: 700, mb: 0.5 }}
//           >
//             Sign in to your account
//           </Typography>
//           <Typography variant="body2" sx={{ color: "text.secondary" }}>
//             Don&apos;t have an account?{" "}
//             <Link href="/signup" underline="hover" sx={{ fontWeight: 600 }}>
//               Get started
//             </Link>
//           </Typography>
//         </Box>

//         {/* Email */}
//         <TextField
//           label="Email address"
//           type="email"
//           fullWidth
//           autoComplete="email"
//         />

//         {/* Password + forgot link */}
//         <Box>
//           <TextField
//             label="Password"
//             type={showPassword ? "text" : "password"}
//             fullWidth
//             autoComplete="current-password"
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     onClick={() => setShowPassword((s) => !s)}
//                     edge="end"
//                   >
//                     {showPassword ? (
//                       <VisibilityOffOutlinedIcon />
//                     ) : (
//                       <VisibilityOutlinedIcon />
//                     )}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Box
//             sx={{
//               mt: 1,
//               display: "flex",
//               justifyContent: "flex-end",
//             }}
//           >
//             <Link href="#" variant="body2" underline="hover" sx={{ fontWeight: 500 }}>
//               Forgot password?
//             </Link>
//           </Box>
//         </Box>

//         {/* Sign in button */}
//         <Button
//           variant="contained"
//           size="large"
//           fullWidth
//           sx={{
//             mt: 1,
//             py: 1.3,
//             textTransform: "none",
//             fontWeight: 600,
//             fontSize: 15,
//             bgcolor: "#111827",
//             "&:hover": {
//               bgcolor: "#020617",
//             },
//           }}
//         >
//           Sign in
//         </Button>
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
  Google,
  Facebook
} from '@mui/icons-material';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login submitted:', formData);
      alert('Login successful!');
    }
  };

  const handleLogin = async () => {
    try {
        // const response 
    } catch (error) {
       console.error('Login failed:', error);
    }
  }

  return (
    <Grid container sx={{ height: '100vh', overflow: 'hidden' }}>
      {/* Left Side - Welcome Section */}
      <Grid 
        item 
        xs={false} 
        md={7}
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
            Welcome Back!
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Login to access your account and continue your journey with us
          </Typography>
        </Box>
      </Grid>

      {/* Right Side - Login Form */}
      <Grid 
        item 
        xs={12} 
        md={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 4,
          backgroundColor: '#fff'
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
              <Lock sx={{ color: 'white', fontSize: 30 }} />
            </Box>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              Login
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Enter your credentials to access your account
            </Typography>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} noValidate>
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

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label={<Typography variant="body2">Remember me</Typography>}
              />
              <Link
                href="#"
                underline="hover"
                sx={{ fontSize: '0.875rem', color: 'primary.main' }}
              >
                Forgot Password?
              </Link>
            </Box>

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
              onClick={handleLogin}
            >
              Login
            </Button>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account?{' '}
                <Link
                  component="button"
                  type="button"
                  onClick={() => navigate('/signup')}
                  sx={{
                    color: 'primary.main',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
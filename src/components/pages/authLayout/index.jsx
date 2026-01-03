import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* Left Section - Branding */}
        <Box
          sx={{
            flex: 1,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            p: 6,
          }}
        >
          <Box sx={{ maxWidth: 500, textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome to AppName
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9, mt: 2, mb: 4 }}>
              Your journey to excellence starts here. Join thousands of users who trust our platform.
            </Typography>
            
            {/* Decorative Circle */}
            <Box
              sx={{
                width: 250,
                height: 250,
                borderRadius: '50%',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                my: 4,
              }}
            >
              <Box
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LockOutlinedIcon sx={{ fontSize: 80, opacity: 0.8 }} />
              </Box>
            </Box>

            {/* Features */}
            <Box sx={{ mt: 4, opacity: 0.9 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>✓ Secure & Encrypted</Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>✓ 24/7 Support</Typography>
              <Typography variant="body2">✓ Easy to Use</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Section - Form */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#f5f5f5',
            p: 3,
          }}
        >
          <Container maxWidth="sm">
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
              }}
            >
              <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {subtitle}
                </Typography>
              </Box>
              {children}
            </Paper>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AuthLayout;
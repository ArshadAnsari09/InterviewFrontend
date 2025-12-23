import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function AuthLayout({ title, subtitle, imageUrl, children }) {
  const illustration =
    imageUrl ||
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F4F6F8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top bar */}
      <Box
        sx={{
          px: { xs: 2.5, md: 6 },
          py: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo placeholder */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: 1.5,
              background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            m
          </Box>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontWeight: 500 }}
          >
            Need help?
          </Typography>
          <IconButton size="small">
            <SettingsOutlinedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      {/* Main content */}
      <Grid
        container
        sx={{
          flex: 1,
          px: { xs: 2.5, md: 6 },
          pb: { xs: 4, md: 6 },
        }}
      >
        {/* LEFT: greeting + illustration */}
        <Grid
            item
            xs={12}
            md={9}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mb: { xs: 4, md: 0 },

                // widen left side
                flexBasis: { md: "72%" },
                maxWidth: { md: "72%" },
            }}
        >
          <Box sx={{ maxWidth: 800, mb: { xs: 3, md: 4 } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.4rem" },
                mb: 1.5,
              }}
            >
              Hi, Welcome back
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
              }}
            >
              More effectively with optimized workflows.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 520,
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                pt: "70%",
                borderRadius: 4,
                backgroundImage: `url(${illustration})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow:
                  "0px 20px 45px rgba(15, 23, 42, 0.12), 0px 0px 0px 1px rgba(15, 23, 42, 0.04)",
              }}
            />
            {/* Placeholder for logos row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: 4,
                mt: 4,
                opacity: 0.8,
              }}
            >
              {["▢", "△", "⬡", "⭑"].map((symbol) => (
                <Box
                  key={symbol}
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "999px",
                    border: "1px solid rgba(148,163,184,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    color: "text.secondary",
                  }}
                >
                  {symbol}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* RIGHT: auth card */}
        <Grid
            item
            xs={12}
            md={3}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "flex-start", md: "center" },

                // shrink right side
                flexBasis: { md: "28%" },
                maxWidth: { md: "28%" },
            }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: 440,
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "#FFFFFF",
            }}
          >
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

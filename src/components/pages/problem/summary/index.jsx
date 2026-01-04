import React from "react";
import { Box, Typography, Chip } from "@mui/material";

const SummarySection = ({ total, easy, medium, hard }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        padding: "20px",
        borderRadius: "8px",
        color: "white",
        marginTop: "40px",
      }}
    >
      {/* Total Problems */}
      <Box sx={{ display: "flex", alignItems: "center", marginRight: 5 }}>
        <Chip
          label={total}
          color="success"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            marginRight: 1,
          }}
        />
        <Typography variant="body1">Total Problems</Typography>
      </Box>

      {/* Easy */}
      <Box sx={{ display: "flex", alignItems: "center", marginRight: 5 }}>
        <Chip
          label={easy}
          color="success"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            marginRight: 1,
          }}
        />
        <Typography variant="body1">Easy</Typography>
      </Box>

      {/* Medium */}
      <Box sx={{ display: "flex", alignItems: "center", marginRight: 5 }}>
        <Chip
          label={medium}
          color="warning"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            marginRight: 1,
          }}
        />
        <Typography variant="body1">Medium</Typography>
      </Box>

      {/* Hard */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Chip
          label={hard}
          color="error"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            marginRight: 1,
          }}
        />
        <Typography variant="body1">Hard</Typography>
      </Box>
    </Box>
  );
};

export default SummarySection;

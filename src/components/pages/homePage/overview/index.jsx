import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";
import HeroSectionImg from "../../../../assets/img/hero.jpg";
import IWButton from "../../../common/ui/IWButton";


const Overview = ({ heading, description,features }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stacking content on mobile and side-by-side on desktop
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "60px 20px",
      }}
    >
      {/* Left Section - Text and Stats */}
      <Box sx={{ maxWidth: "600px", marginRight: { md: "20px" }, textAlign: "center", marginBottom: { xs: "40px", md: "0" } }}>
        {/* Title and Description */}
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#00CFC8", fontSize: "48px", textAlign: "center" }}>
          {heading}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "18px", color: "#fff", textAlign: "center", margin: "20px auto", maxWidth: 800 }}>
          {description}
        </Typography>

        {/* Feature List */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, marginTop: 4 }}>
          {features.map((feature, index) => (
            <Chip
              key={index}
              icon={<CheckCircleIcon />}
              label={feature.label}
              sx={{ backgroundColor: "#00CFC8", color: "#000", fontSize: 14 }}
            />
          ))}
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4, marginTop: 6 }}>
          <IWButton
            variant="contained"
            sx={{
              backgroundColor: "#00CFC8",
              color: "#000",
              fontSize: 18,
              padding: "12px 24px",
              "&:hover": {
                backgroundColor: "#00b8b1",
              },
            }}
          >
            Start Coding Now
          </IWButton>
        </Box>
      </Box>

      {/* Right Section - Image */}
      <Box sx={{ textAlign: "center", flex: 1 }}>
        <img
          src={HeroSectionImg}
          alt="Overview"
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
};

export default Overview;

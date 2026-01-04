import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const FeaturesSection = ({ heading, description, features }) => {
  return (
    <Box sx={{ backgroundColor: "#121212", color: "#fff", padding: "60px 20px" }}>
      {/* Title and Description */}
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#00CFC8", fontSize: "48px", textAlign: "center" }}>
        {heading}
      </Typography>
      <Typography variant="h6" sx={{ fontSize: "18px", color: "#fff", textAlign: "center", margin: "20px auto", maxWidth: 800 }}>
        {description}
      </Typography>

      {/* Feature Cards */}
      <Grid container spacing={4} sx={{ marginTop: 6, display: "flex", justifyContent: "center" }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card sx={{ backgroundColor: "#1E1E1E", borderRadius: "12px", boxShadow: 3 }}>
              <CardMedia sx={{ padding: "10px", backgroundColor: "#00CFC8", display: "flex", justifyContent: "center" }}>
                {feature.icon}
              </CardMedia>
              <CardContent sx={{ padding: "10px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", textAlign: "center" }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#A0A0A0", textAlign: "center", marginTop: "10px" }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;

import React,{useState} from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material";
import IWButton from "./ui/IWButton";
import IWModal from "./ui/IWModal";
import Login from "../pages/login";
import Signup from "../pages/signup";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchForm = () => setIsLogin(!isLogin); 

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#121212" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CodeIcon sx={{ color: "#00CFC8", fontSize: 30 }} />
          <Typography
            variant="h6"
            sx={{
              color: "#00CFC8",
              fontWeight: "bold",
              marginLeft: 1,
              fontSize: 24,
            }}
          >
            InterviewReady
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IWButton
            variant="contained"
            sx={{
              backgroundColor: "#00CFC8",
              color: "#fff",
              padding: "8px 20px",
              fontSize: 14,
              "&:hover": {
                backgroundColor: "#00b8b1",
              },
            }}
            onClick={() => setOpenModal(true)}
          >
            Get Started
          </IWButton>
        </Box>
      </Toolbar>
      <IWModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={isLogin ? "Login" : "Signup"}
        switchText={isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        onSwitch={handleSwitchForm}
      >
        {isLogin ? <Login /> : <Signup />}
      </IWModal>
    </AppBar>
  );
};

export default Header;

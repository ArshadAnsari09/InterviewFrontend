import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../authLayout/index";

import IWInput from "../../common/ui/IWInput";
import IWButton from "../../common/ui/IWButton";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { login } from "../../../helpers/api";
import Cookies from 'js-cookie';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => setSuccess(""), 3000);
    } else {
      setErrors(newErrors);
    }
    console.log("formData: ",formData);
    try {
      const result = await login(formData);
      if(result.status === 200){
        Cookies.set("accessToken",result.res.accessToken);
        
        navigate("/");
      }
    } catch (error) {
      console.log("error: ",error);
    }
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Please login to your account to continue">
      <div>
        {/* {success && <IWAlert type="success">{success}</IWAlert>} */}

        <IWInput
          labelText="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          errorText={errors.email}
          placeholder="you@example.com"
          fullWidth
          sx={{mb: 2}}
        />

        <IWInput
          labelText="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          errorText={errors.password}
          placeholder="Enter your password"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div style={{ display: "flex", justifyContent: "flex-end",}}>
          <IWButton
            type="button"
            variant="text"
            disableRipple
            disableFocusRipple
            sx={{
              textTransform: "none",
              "&:hover": { backgroundColor: "transparent" },
            }}
            onClick={() => console.log("forgot password")}
          >
            Forgot password?
          </IWButton>
        </div>

        <IWButton
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          fullWidth
          sx={{mt: 1,textTransform: "none",}}
        >
          Login
        </IWButton>

        <div style={{ position: "relative", margin: "24px 0" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center" }}>
            <div style={{ width: "100%", borderTop: "1px solid #e5e7eb" }} />
          </div>
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <span style={{ padding: "0 8px", backgroundColor: "white", color: "#6b7280", fontSize: "0.875rem" }}>
              OR
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
            Don&apos;t have an account?{" "}
            <IWButton
              type="button"
              variant="text"
              disableRipple
              disableFocusRipple
              onClick={() => navigate("/signup")}
              sx={{
                p: 0,
                minWidth: "auto",
                textTransform: "none",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              Sign Up
            </IWButton>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;

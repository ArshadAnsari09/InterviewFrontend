import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../authLayout/index";

import IWInput from "../../common/ui/IWInput";
import IWButton from "../../common/ui/IWButton";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { createUser } from "../../../helpers/api";

const Signup = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "",confirmPassword : "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      setSuccess("Signup successful! Redirecting...");
      setTimeout(() => setSuccess(""), 3000);
    } else {
      setErrors(newErrors);
    }
    console.log("formData: ",formData);
    try {
      const response = await createUser({...formData ,userType : 3});
      console.log("newUser: ",response);
      if(response.status === 200){
        navigate("/");
      }
    } catch (error) {
      console.log("error: ",error);
    }
  };

  return (
    <AuthLayout title="Create Account" subtitle="Sign up to get started with our platform">
      <div>
        {/* {success && <IWAlert type="success">{success}</IWAlert>} */}
        <IWInput
          labelText="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          errorText={errors.fullName}
          placeholder="Enter your full name"
          fullWidth
          sx={{mb: 2}}
        />

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
          sx={{mb: 2}}
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

        <IWInput
          labelText="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          errorText={errors.confirmPassword}
          placeholder="Enter your password"
          fullWidth
          sx={{mb: 2}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  edge="end"
                  tabIndex={-1}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        >
          Confirm Password
        </IWInput>

        <IWButton
          type="submit"
          onClick={handleSubmit}
          variant="contained"
          fullWidth
          sx={{mt: 1,textTransform: "none",}}
        >
          Create Account
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
            Already have an account?{' '}
            <IWButton
              type="button"
              variant="text"
              disableRipple
              disableFocusRipple
              onClick={() => navigate("/login")}
              sx={{
                p: 0,
                minWidth: "auto",
                textTransform: "none",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              Login
            </IWButton>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
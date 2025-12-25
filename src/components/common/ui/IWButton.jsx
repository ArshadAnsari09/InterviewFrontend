import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const IWButton = ({
  isLoading = false,
  loadingText,
  disabled,
  children,
  startIcon,
  ...props
}) => {
  return (
    <Button
      disabled={disabled || isLoading}
      startIcon={
        isLoading ? <CircularProgress size={18} /> : startIcon
      }
      {...props}
    >
      {isLoading ? loadingText || children : children}
    </Button>
  );
};

export default IWButton;

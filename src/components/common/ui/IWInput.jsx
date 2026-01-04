import React from "react";
import TextField from "@mui/material/TextField";

const IWInput = ({
  labelText,
  errorText,
  helperText,
  error,
  ...props
}) => {
  const hasError = Boolean(errorText || error);

  return (
    <TextField
      label={labelText}
      error={hasError}
      helperText={errorText || helperText}
      {...props}
    />
  );
};

export default IWInput;

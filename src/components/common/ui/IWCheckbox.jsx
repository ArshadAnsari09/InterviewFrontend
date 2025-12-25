import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const IWCheckbox = ({ label, ...props }) => {
  if (!label) {
    return <Checkbox {...props} />;
  }

  return (
    <FormControlLabel
      control={<Checkbox {...props} />}
      label={label}
    />
  );
};

export default IWCheckbox;

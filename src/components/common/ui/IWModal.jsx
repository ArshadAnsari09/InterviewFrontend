import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import IWButton from "./IWButton";

const IWModal = ({ open, onClose, title, children, switchText, onSwitch }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", color: "#00CFC8" }}>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <IWButton onClick={onClose} sx={{ color: "#00CFC8" }}>
            Close
        </IWButton>
        {switchText && (
            <IWButton onClick={onSwitch} sx={{ color: "blue" }}>
                {switchText}
            </IWButton>
            )}
      </DialogActions>
    </Dialog>
  );
};

export default IWModal;

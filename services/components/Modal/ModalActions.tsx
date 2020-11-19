import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import React from "react";

export const ModalActions = ({
  buttonCloseText,
  onClose,
  buttonActionText,
  onClick,
}: any) => (
  <DialogActions>
    {buttonCloseText && (
      <Button onClick={onClose} color="primary">
        {buttonCloseText}
      </Button>
    )}
    {buttonActionText && (
      <Button onClick={onClick} color="secondary" variant="outlined">
        {buttonActionText}
      </Button>
    )}
  </DialogActions>
);

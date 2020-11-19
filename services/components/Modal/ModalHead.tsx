import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export const ModalHead = withStyles(styles)(
  ({ children, classes, onClose }: any) => {
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h2" component={"h2"} color={"primary"}>
          {children}
        </Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  }
);

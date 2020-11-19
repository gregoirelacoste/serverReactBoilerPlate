import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Modal from "../Modal";
import { Typography } from "@material-ui/core";

export interface FeedbackType {
  isOpen: boolean;
  message?: string;
  error?: boolean;
  type?: "modal" | "snackbar";
  modal?: {
    title: string;
    btnText?: string;
    onClick?: (any?: any) => any;
    buttonCloseText?: string;
    onCloseAction?: (any?: any) => any;
  };
}

interface FeedbackProps extends FeedbackType {
  setOpen: (a: any) => any;
}

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Feedback = ({
  isOpen,
  message,
  error,
  type = "snackbar",
  modal,
  setOpen,
}: FeedbackProps) => {
  if (type === "modal" && modal)
    return (
      <Modal
        title={modal.title}
        isOpen={isOpen}
        setOpen={setOpen}
        onClick={modal.onClick}
        buttonActionText={modal.btnText || "Fermer"}
        buttonCloseText={modal.buttonCloseText}
        onCloseAction={modal.onCloseAction}
      >
        <Typography variant={"body1"} component={"p"}>
          {message}
        </Typography>
      </Modal>
    );
  if (type === "snackbar")
    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
        open={isOpen}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          severity={error ? "error" : "success"}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Typography variant={"caption"}> {message}</Typography>
        </Alert>
      </Snackbar>
    );
  return null;
};
export default Feedback;

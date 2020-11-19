import React, { ReactComponentElement } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { ModalHead } from "./ModalHead";
import { ModalActions } from "./ModalActions";
import { PropTypes } from "@material-ui/core";

interface ModalPropsTypes {
  title: string;
  children?: any;
  isOpen?: boolean;
  contentDialog?: string | ReactComponentElement<any>;
  onClick?: (any: any) => any;
  maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl";
  buttonColor?: PropTypes.Color;
  buttonStyle?: "text" | "outlined" | "contained";
  buttonCloseText?: string;
  buttonActionText?: string;
  buttonModalText?: string;
  lazyClick?: () => any;
  onCloseAction?: (any?: any) => any;
  setOpen: (any?: any) => any;
}

const Modal = ({
  buttonModalText,
  title,
  isOpen = false,
  contentDialog,
  buttonCloseText,
  onClick,
  buttonActionText,
  buttonColor,
  buttonStyle,
  children,
  maxWidth,
  lazyClick,
  onCloseAction,
  setOpen,
}: ModalPropsTypes) => {
  const onClose = () => {
    onCloseAction && onCloseAction();
    setOpen(false);
  };
  const onClickClose = (onClick: any) => {
    onClick && onClick();
    onClose();
  };
  return (
    <React.Fragment>
      {buttonModalText && (
        <Button
          onClick={() => {
            setOpen(true);
            lazyClick && lazyClick();
          }}
          variant={buttonStyle}
          color={buttonColor}
        >
          {buttonModalText}
        </Button>
      )}
      <Dialog
        open={isOpen}
        onClose={onClose}
        scroll={"body"}
        aria-labelledby="scroll-dialog-title"
        maxWidth={maxWidth || "md"}
      >
        <ModalHead onClose={onClose}>{title}</ModalHead>
        <DialogContent dividers>
          {contentDialog && (
            <DialogContentText>{contentDialog}</DialogContentText>
          )}
          {children}
        </DialogContent>
        <ModalActions
          onClose={onClose}
          buttonCloseText={buttonCloseText}
          buttonActionText={buttonActionText}
          onClick={() => onClickClose(onClick)}
        />
      </Dialog>
    </React.Fragment>
  );
};

export default Modal;

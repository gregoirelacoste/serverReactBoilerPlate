import React from "react";
import { OutlinedTextFieldProps } from "@material-ui/core/TextField/TextField";
import { TextField, Typography } from "@material-ui/core";
import CustomLabel from "./CustomLabel";

interface CustomTextFieldProps extends OutlinedTextFieldProps {
  textError?: string;
  name: string;
  customLabel?: string;
}

const CustomNumber = ({
  textError,
  customLabel,
  name,
  ...rest
}: CustomTextFieldProps) => {
  return (
    <>
      <CustomLabel customLabel={customLabel} name={name} />
      <br />
      <TextField type="number" id={name} name={name} {...rest} />
      {textError && (
        <Typography variant={"body1"} color={"secondary"} component={"p"}>
          {textError}
        </Typography>
      )}
    </>
  );
};
export default CustomNumber;

import { Typography } from "@material-ui/core";
import React from "react";

interface CustomLabelProps {
  name: string;
  customLabel?: string;
}

const CustomLabel = ({ name, customLabel }: CustomLabelProps) => {
  if (!customLabel) return null;
  return (
    <Typography variant={"body1"} component={"label"} htmlFor={name}>
      {customLabel}
    </Typography>
  );
};
export default CustomLabel;

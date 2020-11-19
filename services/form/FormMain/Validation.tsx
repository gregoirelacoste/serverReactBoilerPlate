import React from "react";
import { Typography } from "@material-ui/core";

interface ValidationProps {
  lastStep?: any;
}

const Validation = ({ lastStep }: ValidationProps) => {
  if (!lastStep) return null;
  return <Typography variant={"body1"}> {lastStep}</Typography>;
};
export default Validation;

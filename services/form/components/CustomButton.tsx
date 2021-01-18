import { Button, CircularProgress, Grid } from "@material-ui/core";
import React from "react";

interface CustomButtonProps {
  onClick?: (any: any) => any;
  loading?: boolean;
  text?: string;
}

const CustomButton = ({ loading, onClick, text }: CustomButtonProps) => {
  return (
    <Grid item>
      {loading ? (
        <CircularProgress />
      ) : (
        <Button variant={"outlined"} color={"primary"} onClick={onClick}>
          {text}
        </Button>
      )}
    </Grid>
  );
};
export default CustomButton;

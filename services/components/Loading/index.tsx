import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  progress: {
    display: "inline-block",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Loading = () => {
  const classes = useStyles();
  return (
    <>
      <CircularProgress className={classes.progress} />
    </>
  );
};

export default Loading;

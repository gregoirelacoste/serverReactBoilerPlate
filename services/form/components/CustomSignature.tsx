import React from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button, Grid, Typography } from "@material-ui/core";
import ReactSignatureCanvas from "react-signature-canvas";
import { makeStyles } from "@material-ui/core/styles";
import { HandleChangeType } from "../FormMain/handleChange";

const useStyles = makeStyles((theme) => ({
  sigCanvas: {
    border: "1px solid " + theme.palette.primary.main,
    width: "100%",
    height: "300px",
    background: "white",
  },
}));

interface SignatureProps {
  value: any;
  handleChange: HandleChangeType<ImageData | string>;
  name: string;
  textError?: string;
}

const CustomSignature = ({
  value,
  name,
  handleChange,
  textError,
}: SignatureProps) => {
  const classes = useStyles();
  let sigPad: ReactSignatureCanvas | null;

  const handleClick = (valid: boolean): any => {
    if (!sigPad) return null;
    const doc: any = valid
      ? sigPad.getTrimmedCanvas().toDataURL("image/png")
      : sigPad.clear();

    const newState = {
      name,
      value: doc,
    };

    handleChange({ target: newState });
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <SignatureCanvas
            penColor="black"
            canvasProps={{ className: classes.sigCanvas }}
            ref={(ref) => {
              sigPad = ref;
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Button
          color={"primary"}
          variant={"contained"}
          onClick={() => handleClick(true)}
        >
          Valider
        </Button>
        <Button onClick={() => handleClick(false)}>Recommencer</Button>
      </Grid>
      {textError && (
        <Typography variant={"body1"} color={"secondary"} component={"p"}>
          {textError}
        </Typography>
      )}
      {value && typeof value === "string" && (
        <img alt={"Illustration"} src={value} width={150} />
      )}
    </>
  );
};
export default CustomSignature;

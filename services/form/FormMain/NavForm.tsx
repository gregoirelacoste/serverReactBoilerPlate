import { Button, Grid } from "@material-ui/core";
import React from "react";
import { StepTypes } from "../types/formStep.types";
import CustomButton from "../components/CustomButton";

export type SetStepType = ({ current: number }: StepTypes) => void;

interface NavForm {
  currentStep: number;
  maxStep: number;
  isValid: boolean;
  setStep: SetStepType;
  onValidation?: (any: any) => any;
  loading?: boolean;
}

const NavForm = ({
  currentStep,
  maxStep,
  isValid,
  setStep,
  onValidation,
  loading,
}: NavForm) => {
  const readableStep = currentStep + 1;

  const before = () =>
    currentStep !== 0 && setStep({ current: currentStep - 1 });
  const next = () =>
    maxStep > readableStep && setStep({ current: currentStep + 1 });
  return (
    <Grid container justify={"space-between"}>
      <Grid item>
        {currentStep > 0 && (
          <Button variant={"outlined"} color={"default"} onClick={before}>
            Précédent
          </Button>
        )}
      </Grid>
      {readableStep < maxStep && (
        <Grid item>
          <Button
            variant={"outlined"}
            color={"primary"}
            onClick={next}
            disabled={!isValid}
          >
            Suivant
          </Button>
        </Grid>
      )}
      {onValidation && readableStep === maxStep && (
        <CustomButton onClick={onValidation} loading={loading} />
      )}
    </Grid>
  );
};
export default NavForm;

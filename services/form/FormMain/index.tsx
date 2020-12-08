import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { FormStep } from "../types/form.types";
import NavForm, { SetStepType } from "./NavForm";
import ChooseFields from "./ChooseFields";
import { StepTypes } from "../types/formStep.types";
import { HandleChangeType } from "./handleChange";
import Validation from "./Validation";
import { getOptionnalFields } from "./getOptionnalFields";

interface ForMainProps {
  step: StepTypes;
  state: any;
  fields: FormStep<any, object>[] | null;
  handleChange: HandleChangeType<any>;
  setStep: SetStepType;
  onValidation?: (any: any) => any;
  lastStep?: any;
  loading?: boolean;
}

const FormMain = ({
  fields,
  step,
  state,
  handleChange,
  setStep,
  onValidation,
  lastStep,
  loading,
}: ForMainProps) => {
  if (!fields) return null;

  let stepName = fields[step.current]?.name;
  const etape = "0" + (step.current + 1);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant={"h3"} component={"h3"} color={"primary"}>
            Étape {etape} : {fields?.[step.current]?.title || "Validation"}
          </Typography>
          <Box m={3} />
        </Grid>
        {fields?.[step.current]?.fields ? (
          fields[step.current].fields?.map((field) => {
            const fieldName = field.name;
            const fieldValue = state?.[stepName]?.values?.[fieldName];
            const fieldError = state?.[stepName]?.errors?.[fieldName]?.[0];
            getOptionnalFields({ field, data: state });

            return (
              <ChooseFields
                key={fieldName}
                field={field}
                size={field.size}
                value={fieldValue}
                error={fieldError}
                handleChange={handleChange}
              />
            );
          })
        ) : (
          <Validation lastStep={lastStep} />
        )}
      </Grid>
      <Box m={3} />
      <NavForm
        setStep={setStep}
        maxStep={fields.length + 1}
        currentStep={step.current}
        isValid={state?.[stepName]?.isValid || false}
        onValidation={onValidation}
        loading={loading}
      />
    </>
  );
};
export default FormMain;

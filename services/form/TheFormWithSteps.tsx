// @ts-ignore
import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { FormWithStep } from "./types/form.types";
import NavForm, { SetStepType } from "./FormMain/NavForm";
import ChooseFields from "./FormMain/ChooseFields";
import { StepTypes } from "./types/formStep.types";
import { HandleChangeType } from "./FormMain/handleChange";
import Validation from "./FormMain/Validation";
import { getOptionnalFields } from "./FormMain/getOptionnalFields";

interface ForMainProps {
  step: StepTypes;
  state: any;
  fields: FormWithStep<any, object>[] | null;
  handleChange: HandleChangeType<any>;
  setStep: SetStepType;
  onValidation?: (any: any) => any;
  lastStep?: any;
  loading?: boolean;
}

const TheFormWithSteps = ({
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
export default TheFormWithSteps;

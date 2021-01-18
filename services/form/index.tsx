import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { ContentFieldTypes } from "./types/form.types";
import ChooseFields from "./FormMain/ChooseFields";
import { HandleChangeType } from "./FormMain/handleChange";
import { getOptionnalFields } from "./FormMain/getOptionnalFields";
import CustomButton from "./components/CustomButton";

interface ForMainProps {
  state: any;
  fields: ContentFieldTypes<any>[];
  handleChange: HandleChangeType<any>;
  onValidation?: (any: any) => any;
  loading?: boolean;
  title: string;
}

const TheForm = ({
  fields,
  state,
  handleChange,
  title,
  loading,
  onValidation,
}: ForMainProps) => {
  if (!fields) return null;
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant={"h3"} component={"h3"} color={"primary"}>
            {title}
          </Typography>
          <Box m={3} />
        </Grid>
        {fields?.map((field, i) => {
          const fieldName = field.name;
          const fieldValue = state?.values?.[fieldName];
          const fieldError = state?.errors?.[fieldName]?.[0];
          getOptionnalFields({ field, data: state });

          return (
            <ChooseFields
              key={i}
              field={field}
              size={field.size}
              value={fieldValue}
              error={fieldError}
              handleChange={handleChange}
            />
          );
        })}
        <CustomButton
          onClick={onValidation}
          loading={loading}
          text={"Valider"}
        />
      </Grid>
      <Box m={3} />
    </>
  );
};
export default TheForm;

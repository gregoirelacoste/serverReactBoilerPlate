import { Grid, GridSize } from "@material-ui/core";
import CustomTextField from "../components/CustomTextField";
import CustomSelectField from "../components/CustomSelectField";
import CustomSwitch from "../components/CustomSwitch";
import React from "react";
import { ContentFieldTypes } from "../types/form.types";
import { HandleChangeType } from "./handleChange";
import CustomSlider from "../components/CustomSlider";
import { makeStyles } from "@material-ui/core/styles";
import CustomMultiple from "../components/CustomMultiple";
import CustomSignature from "../components/CustomSignature";
import CustomNumber from "../components/CustomNumber";

interface FieldsProps {
  field: ContentFieldTypes<any>;
  value: any;
  error?: string;
  handleChange: HandleChangeType<any>;
  size?: GridSize;
}

const useStyles = makeStyles({
  main: {
    marginTop: "10px",
    marginBottom: "10px",
  },
});

const ChooseFields = ({
  field,
  value,
  error,
  handleChange,
  size = 6,
}: FieldsProps) => {
  if (field.optional && !field.optional?.display) return null;

  const classes = useStyles();
  return (
    <Grid item xs={12} md={size} className={classes.main}>
      {field.component === "text" && (
        <CustomTextField
          fullWidth
          customLabel={field.label}
          placeholder={field.placeholder}
          name={field.name}
          value={value || ""}
          error={!!error}
          onChange={handleChange}
          textError={error}
          variant={"outlined"}
          InputProps={{
            inputComponent: field.inputComponent,
          }}
        />
      )}
      {field.component === "number" && (
        <CustomNumber
          fullWidth
          customLabel={field.label}
          placeholder={field.placeholder}
          name={field.name}
          value={value || ""}
          error={!!error}
          onChange={handleChange}
          textError={error}
          variant={"outlined"}
          InputProps={{
            inputComponent: field.inputComponent,
          }}
        />
      )}
      {field.component === "list" && (
        <CustomSelectField
          name={field.name}
          items={field.items}
          value={value || ""}
          onChange={handleChange}
          textError={error}
          label={field.label}
        />
      )}
      {field.component === "switch" && (
        <CustomSwitch
          name={field.name}
          items={field.items}
          value={value || false}
          onChange={handleChange}
          label={field.label}
          textError={error}
        />
      )}
      {field.component === "signature" && (
        <CustomSignature
          name={field.name}
          value={value}
          handleChange={handleChange}
          textError={error}
        />
      )}
      {field.component === "slider" && (
        <CustomSlider
          name={field.name}
          marks={field.marks || []}
          value={value || 0}
          onChange={handleChange}
          label={field.label}
          textError={error}
        />
      )}
      {field.component === "multiple" && (
        <CustomMultiple
          label={field.label}
          choices={field.multipleChoice}
          name={field.name}
          value={value}
          onChange={handleChange}
          textError={error}
        />
      )}
    </Grid>
  );
};
export default ChooseFields;

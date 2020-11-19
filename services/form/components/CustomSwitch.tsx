import React from "react";
import { Grid, Switch, Typography } from "@material-ui/core";
import { ItemTypes } from "../types/form.types";

interface CustomSwtichFieldProps {
  items?: ItemTypes<boolean>[];
  value: boolean;
  onChange: (any: any) => any;
  label?: string;
  name: string;
  textError?: string;
}

export const switchItems: ItemTypes<boolean>[] = [
  { value: false, label: "Non" },
  { value: true, label: "Oui" },
];

const CustomSwitch = ({
  items,
  onChange,
  value,
  name,
  label,
  textError,
}: CustomSwtichFieldProps) => {
  return (
    <>
      <Typography component="div">
        {label}
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>{items && items[0]?.label}</Grid>
          <Grid item>
            <Switch
              name={name}
              checked={value}
              onChange={() =>
                onChange({ target: { name: name, value: !value } })
              }
            />
          </Grid>
          <Grid item>{items && items[1]?.label}</Grid>
        </Grid>
      </Typography>
      {textError && (
        <Typography variant={"body1"} color={"secondary"} component={"p"}>
          {textError}
        </Typography>
      )}
    </>
  );
};
export default CustomSwitch;

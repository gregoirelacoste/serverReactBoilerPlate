import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";
import React from "react";
import { ItemTypes } from "../types/form.types";
import CustomLabel from "./CustomLabel";

interface CustomSelectFieldProps {
  items?: ItemTypes<any>[];
  value: string | number;
  onChange: (any: any) => any;
  label?: string;
  name: string;
  textError?: string;
}

const CustomSelectField = ({
  items,
  onChange,
  value,
  label,
  name,
  textError,
  ...rest
}: CustomSelectFieldProps) => {
  return (
    <FormControl fullWidth>
      <CustomLabel customLabel={label} name={name} />
      <Select
        placeholder={label}
        fullWidth
        variant={"outlined"}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {items &&
          items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
      </Select>
      {textError && (
        <Typography variant={"body1"} color={"secondary"} component={"p"}>
          {textError}
        </Typography>
      )}
    </FormControl>
  );
};
export default CustomSelectField;

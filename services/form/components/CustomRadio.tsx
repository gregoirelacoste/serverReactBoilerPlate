import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import { ItemTypes, MultipleChoiceTypes } from "../types/form.types";

interface CustomRadioProps {
  items: MultipleChoiceTypes[] | ItemTypes<any>[];
  name: string;
  onChange: any;
  value: any;
}

type CustomItemTypes = MultipleChoiceTypes | ItemTypes<any>;

const CustomRadio = ({ items, name, onChange, value }: CustomRadioProps) => {
  const [select, setSelect] = useState<any>(value);
  const handleChange = (item: CustomItemTypes) => {
    setSelect(item.value);
    onChange(item);
  };
  if (!items) return null;

  return (
    <>
      <RadioGroup row aria-label={name} name={name}>
        {
          // @ts-ignore
          items.map((item: CustomItemTypes) => {
            return (
              <FormControlLabel
                key={item.value}
                value={item.value}
                name={name}
                checked={item.value === select || item.value === value}
                control={<Radio color="primary" />}
                onChange={() => handleChange(item)}
                label={item.label}
                labelPlacement="bottom"
              />
            );
          })
        }
      </RadioGroup>
    </>
  );
};

export default CustomRadio;

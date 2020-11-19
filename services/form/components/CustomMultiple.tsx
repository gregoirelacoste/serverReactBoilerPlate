import React, { useState } from "react";
import { HandleChangeType } from "../FormMain/handleChange";
import CustomRadio from "./CustomRadio";
import { Box, Theme, Typography } from "@material-ui/core";
import { MultipleChoiceTypes } from "../types/form.types";
import { makeStyles } from "@material-ui/core/styles";
import CustomLabel from "./CustomLabel";

interface CustomMultipleProps {
  choices: any;
  name: string;
  onChange: HandleChangeType<any[]>;
  label?: string;
  value: any[];
  textError?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  radioOdd: {
    background: theme.palette.primary.light,
  },
  radio: {
    background: theme.palette.secondary.light,
  },
}));

const isOdd = (num: number) => num % 2;

const CustomMultiple = ({
  choices,
  name,
  value = [],
  onChange,
  label,
  textError,
}: CustomMultipleProps) => {
  const [select, setSelect] = useState<any>([]);
  const classes = useStyles();

  const handleChange = (choice: MultipleChoiceTypes) => {
    const newState = [
      ...select.filter(
        (sel: MultipleChoiceTypes) =>
          sel.niveau !== choice.niveau && sel.niveau < choice.niveau
      ),
      choice,
    ];
    setSelect(newState);

    let arrayValues: any[] = [];
    newState.forEach((selected: MultipleChoiceTypes) =>
      arrayValues.push(selected.label)
    );
    onChange({ target: { name, value: arrayValues } });
  };

  return (
    <>
      <CustomLabel name={name} customLabel={label} />
      <div className={classes.radioOdd}>
        <CustomRadio
          value={value[0]}
          items={choices}
          name={name}
          onChange={handleChange}
        />
      </div>
      <Box m={1} />
      {select.map((niveau: MultipleChoiceTypes, i: number) => {
        if (!niveau.children) return null;
        return (
          <div key={i} className={isOdd(i) ? classes.radioOdd : classes.radio}>
            <CustomRadio
              items={niveau.children}
              name={name}
              value={value[i + 1]}
              onChange={handleChange}
            />
            <Box m={1} />
          </div>
        );
      })}
      {textError && (
        <Typography variant={"body1"} color={"secondary"} component={"p"}>
          {textError}
        </Typography>
      )}
    </>
  );
};

export default CustomMultiple;

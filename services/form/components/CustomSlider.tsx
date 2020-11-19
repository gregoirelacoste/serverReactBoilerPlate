import React, { ChangeEvent } from "react";
import { createStyles, Slider, Theme, Typography } from "@material-ui/core";
import { MarksTypes } from "../types/form.types";
import { makeStyles } from "@material-ui/core/styles";
import CustomLabel from "./CustomLabel";

interface CustomSliderProps {
  marks: MarksTypes<any>[];
  value: number;
  onChange: (any: any) => any;
  label?: string;
  name: string;
  textError?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    margin: {
      height: theme.spacing(3),
    },
  })
);

const CustomSlider = ({
  marks,
  onChange,
  value = 5,
  name,
  label,
  textError,
}: CustomSliderProps): any => {
  const classes = useStyles();

  const valueText = (value: number) => {
    // @ts-ignore
    return marks?.[value]?.label;
  };

  const handleChange = (_e: ChangeEvent<{}>, value: number | number[]) => {
    onChange({ target: { name, value } });
  };

  return (
    <div className={classes.root}>
      <CustomLabel customLabel={label} name={name} />
      <Slider
        onChange={handleChange}
        name={name}
        defaultValue={value}
        getAriaValueText={valueText}
        aria-labelledby={name}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
        max={4}
      />
      {textError && (
        <Typography variant={"body1"} color={"secondary"} component={"p"}>
          {textError}
        </Typography>
      )}
    </div>
  );
};

export default CustomSlider;

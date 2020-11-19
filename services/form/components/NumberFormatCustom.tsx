import NumberFormat from "react-number-format";
import React from "react";

export const NumberFormatCustom = (props: any) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator={" "}
      isNumericString
      decimalScale={2}
    />
  );
};
export const TelNumber = (props: any) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      type={"tel"}
      format={"## ## ## ## ##"}
      mask="_"
    />
  );
};
export const DateFormat = (props: any) => {
  const { inputRef, onChange, ...other } = props;
  const limit = (val: string, max: string) => {
    if (val && val > max) val = max;
    if (val === "00") val = "01";
    return val;
  };

  const formatDate = (val: string) => {
    const day = limit(val.substring(0, 2), "31") || "__";
    const month = limit(val.substring(2, 4), "12") || "__";
    const year = val.substring(4, 8) || "____";

    return day + "/" + month + "/" + year;
  };

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: formatDate(values.value),
          },
        });
      }}
      type={"text"}
      format={formatDate}
    />
  );
};
export const AnneeFormat = (props: any) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      type={"text"}
      format={"####"}
      mask="_"
    />
  );
};
export const CpFormat = (props: any) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      type={"text"}
      format={"#####"}
      mask="_"
    />
  );
};

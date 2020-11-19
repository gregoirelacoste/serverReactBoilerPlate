import { GridSize } from "@material-ui/core";
import React from "react";
import { InputBaseComponentProps } from "@material-ui/core/InputBase/InputBase";

type ComponentTypes =
  | "text"
  | "list"
  | "switch"
  | "slider"
  | "multiple"
  | "signature";

export interface ItemTypes<val> {
  value: val | string | number;
  label: string;
}

export interface MarksTypes<val> {
  label: val;
  value: number;
}
[];

export interface MultipleChoiceTypes {
  label: string;
  value: string;
  niveau: number;
  children?: MultipleChoiceTypes[];
}
export type InputComponentType = React.ElementType<InputBaseComponentProps>;

export interface ContentFieldTypes<Fields> {
  name: Fields;
  component: ComponentTypes;
  label?: string;
  placeholder?: string;
  items?: ItemTypes<any>[] | [];
  marks?: MarksTypes<any>[];
  multipleChoice?: MultipleChoiceTypes[];
  optionnal?: boolean;
  size?: GridSize;
  inputComponent?: InputComponentType;
}

export interface FormTypes<Input> {
  values: Input;
  isValid: boolean;
  errors?: { [field: string]: [string] };
}
export interface FormStep<Fields, Name extends string> {
  name: Name;
  title: string;
  fields?: ContentFieldTypes<Fields>[];
}

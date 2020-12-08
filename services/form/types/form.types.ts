import { GridSize } from "@material-ui/core";
// @ts-ignore
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

export interface ContentFieldTypes<Fields, Form> {
  name: Fields;
  component: ComponentTypes;
  label?: string;
  placeholder?: string;
  items?: ItemTypes<any>[] | [];
  marks?: MarksTypes<any>[];
  multipleChoice?: MultipleChoiceTypes[];
  optional?: {
    display: boolean;
    condition: (data: Form) => boolean;
  };
  size?: GridSize;
  inputComponent?: InputComponentType;
}

export interface FormTypes<Input> {
  values: Input;
  isValid: boolean;
  errors?: { [field: string]: [string] };
}
export interface FormStep<Fields, Form> {
  name: keyof Form;
  title: string;
  fields?: ContentFieldTypes<Fields, Form>[];
}

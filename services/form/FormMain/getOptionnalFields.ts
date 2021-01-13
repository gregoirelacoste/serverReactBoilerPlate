import { Maybe } from "graphql/jsutils/Maybe";
import { ContentFieldTypes } from "../types/form.types";

export interface OptionnalFields {
  field: ContentFieldTypes<any>;
  data: Maybe<any>;
}

export const getOptionnalFields = ({
  field,
  data,
}: OptionnalFields): boolean => {
  if (!field) return false;
  if (field.optional === undefined) return false;
  return (field.optional.display = field.optional.condition(data));
};

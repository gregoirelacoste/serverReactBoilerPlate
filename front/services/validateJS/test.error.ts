import validate from "validate.js";

const testError = (
  formState: any,
  name: string,
  value: any,
  constraints: object
) => {
  const error = validate({ ...formState?.values, [name]: value }, constraints);
  if (!error)
    return {
      values: { ...formState?.values, [name]: value },
      errors: error,
      isValid: true,
    };
  return {
    ...formState,
    values: { ...formState?.values, [name]: value },
    errors: error,
    isValid: false,
  };
};
export default testError;

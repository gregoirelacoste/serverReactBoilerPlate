import testError from "../../validateJS/test.error";

export interface EventHandleChange<valueType> {
  target: { name: string; value: valueType; type: string };
}

export type HandleChangeType<valueType> = (
  e: EventHandleChange<valueType>
) => void;

export const getHandleChange = (
  data: any,
  setState: any,
  constraints: any = null,
  stepName: string | null = null
): HandleChangeType<any> => (e: EventHandleChange<any>) => {
  const name = e?.target?.name;
  let value = e?.target?.value;
  const type = e?.target?.type;
  if (type === "number") value = parseInt(value);

  const dataForm = stepName ? data[stepName] : data;
  const constraintsForm = stepName ? constraints[stepName] : constraints;

  let newState;
  if (constraints) {
    newState = testError(dataForm, name, value, constraintsForm);
  } else {
    newState = {
      ...dataForm,
      values: { ...data?.values, [name]: value },
      isValid: true,
    };
  }
  if (stepName) {
    return setState({
      ...data,
      [stepName]: {
        ...newState,
      },
    });
  } else {
    return setState({
      ...newState,
    });
  }
};
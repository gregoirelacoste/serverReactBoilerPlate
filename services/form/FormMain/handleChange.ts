import testError from "../../validateJS/test.error";
import constraints from "../../../domain/form/formConstraints";

export interface EventHandleChange<valueType> {
  target: { name: string; value: valueType };
}

export type HandleChangeType<valueType> = (
  e: EventHandleChange<valueType>
) => null;

export const getHandleChange = (
  data: any,
  stepName: string,
  setState: any
): HandleChangeType<any> => (e: EventHandleChange<any>) => {
  const name = e?.target?.name;
  const value = e?.target?.value;

  const newState = testError(
    data[stepName],
    name,
    value,
    constraints[stepName]
  );

  return setState({
    ...data,
    [stepName]: {
      ...newState,
    },
  });
};

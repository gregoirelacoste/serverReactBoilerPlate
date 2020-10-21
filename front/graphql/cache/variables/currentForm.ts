import { makeVar } from "@apollo/client";

interface CurrentFormTypes {
  data?: number;
}

const initcurrentForm = [{ data: 1 }];

export const currentFormVar = makeVar<CurrentFormTypes[]>(initcurrentForm);

export const currentForm = {
  read() {
    return currentFormVar();
  },
};

import { mailRegex } from "./regex";

const requis = "est requis";
const maxMessage = "Le champs ne doit pas contenir plus de ";
const max150Carract = {
  presence: { allowEmpty: false, message: requis },
  length: {
    maximum: 150,
    message: maxMessage + " 150 carractères",
  },
};
const date = {
  presence: { allowEmpty: false, message: requis },
  length: {
    maximum: 8,
  },
};
const number = {
  presence: { allowEmpty: false, message: requis },
  numericality: {
    onlyInteger: true,
    message: requis,
  },
};
const mail = {
  presence: { allowEmpty: false, message: requis },
  email: { message: "Veuillez entrer un mail valide" },
  length: {
    maximum: 64,
    message: maxMessage + " 64 carractères",
  },
  format: {
    pattern: mailRegex,
    message: "Veuillez entrer un mail valide",
  },
};
const requisVal = { presence: { allowEmpty: false, message: requis } };

const options = {
  max150Carract,
  date,
  number,
  mail,
  requisVal,
};

export default options;

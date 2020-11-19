import { mailRegex } from "./regex";
import validate from "validate.js";
import moment from "moment";

const requis = "est requis";
const maxMessage = "Le champs ne doit pas contenir plus de ";
const max150Carract = {
  presence: { allowEmpty: false, message: requis },
  length: {
    maximum: 150,
    message: maxMessage + " 150 carractères",
  },
};

validate.extend(validate.validators.datetime, {
  // The value is guaranteed not to be null or undefined but otherwise it
  // could be anything.
  parse: function (value: any) {
    return +moment.utc(value);
  },
  // Input is a unix timestamp
  format: function (value: any, options: any) {
    const format = options.dateOnly ? "MM/DD/YYYY" : "YYYY-MM-DD hh:mm:ss";
    return moment.utc(value).format(format);
  },
});

const date = {
  presence: { allowEmpty: false, message: requis },
  datetime: {
    dateOnly: true,
    message: "^La date doit être au format : jj mm aaaa",
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

const validateOptions = {
  max150Carract,
  date,
  number,
  mail,
  requisVal,
};

export default validateOptions;

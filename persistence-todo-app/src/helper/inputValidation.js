import { Validators } from "./validators.js";

export const inputValidation = (input) => {
  const str = input.trim();

  //all validation should pass
  return Validators.every((validator) => {
    return validator(str);
  });
};

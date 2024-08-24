import { EMAIL_REGEX, NAME_REGEX, PASSWORD_REGEX } from "./constants";

export const isValidName = (name: string): boolean => {
  return NAME_REGEX.test(name);
};

export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return PASSWORD_REGEX.test(password);
};

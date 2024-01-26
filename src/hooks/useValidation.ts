import { useEffect, useState } from "react";
import { Rules } from "../types";

type Data = {
  [key: string]: any;
};

type ErrorState =
  | undefined
  | {
      [key: string]: string;
    };

const getErrors = (data: Data, fields: string[] = [], rules: Rules) => {
  const errors = fields
    .filter((field) => field)
    .map((field: string) => {
      if (!rules[field]?.validator(data[field])) {
        return { [field]: rules[field]?.errorMessage };
      }
    })
    .filter((errors) => errors)
    .reduce((acc, element) => ({ ...acc, ...element }), {});

  return errors;
};

export const useValidation = (
  data: Data,
  fields: string[] = [],
  rules: Rules,
  shouldValidate: boolean
) => {
  const [errors, setErrors] = useState<ErrorState>();

  useEffect(() => {
    if (!shouldValidate) return;

    setErrors(getErrors(data, fields, rules));
  }, [data, shouldValidate, fields]);

  return errors || {};
};

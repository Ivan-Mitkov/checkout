import isEmpty from "lodash.isempty";
import { Rules } from "../../types";

export const ValidationRules: Rules = {
  name: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "Name is mandatory",
  },
  email: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "Email is mandatory",
  },
  country: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "Country is mandatory",
  },
  city: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "City is mandatory",
  },
  street: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "Street is mandatory",
  },
};

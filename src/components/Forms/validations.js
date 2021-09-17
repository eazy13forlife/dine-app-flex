import * as yup from "yup";

import {
  checkValidMonth,
  checkValidDay,
  checkValidYear,
  checkValidHour,
  checkValidMinutes,
} from "./validationFunctions.js";

const userSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid email"),
  date: yup.object().shape({
    month: yup
      .string()
      .required("Required")
      .length(2, "Must be in format MM")
      .test("isValidMonth", "Invalid month", checkValidMonth),

    day: yup
      .string()
      .required("Required")
      .length(2, "Must be in format DD")
      .test("isValidDay", "Invalid day", checkValidDay),
    year: yup
      .string()
      .required("Required")
      .length(4, "Must be in format YYYY")
      .test("isValidYear", "Invalid year", checkValidYear),
  }),
  time: yup.object().shape({
    hour: yup
      .string()
      .required("Required")
      .length(2, "Must be in format hhs")
      .test("isValidHour", "Invalid hour", checkValidHour),
    minutes: yup
      .string()
      .required("Required")
      .length(2, "Must be format mm")
      .test("isValidMinutes", "Invalid minutes", checkValidMinutes),
  }),
});

export default userSchema;

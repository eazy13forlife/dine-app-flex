import moment from "moment";

//validation for date
const checkValidNumber = (value) => {
  const number = +value;
  if (isNaN(number)) {
    return false;
  }
  return true;
};

const checkValidMonth = (value) => {
  if (!checkValidNumber(value)) {
    return false;
  }

  const number = +value;
  if (number >= 1 && number <= 12) {
    return true;
  } else {
    return false;
  }
};

const checkValidDay = (value, context) => {
  console.log(context);
  if (!checkValidNumber(value)) {
    return false;
  }
  const { parent } = context;
  const number = +value;
  switch (parent.month) {
    case "01":
    case "03":
    case "05":
    case "07":
    case "08":
    case "10":
    case "12":
      if (number > 0 && number <= 31) {
        return true;
      } else {
        return false;
      }
    case undefined: //when month is undefined, so nothing has been entered, let's just say that the largest
      // number user can enter is 31
      if (number > 0 && number <= 31) {
        return true;
      } else {
        return false;
      }
    default:
      //if month is not one of those above, then the largest number can be 30
      if (number > 0 && number <= 30) {
        return true;
      } else {
        return false;
      }
  }
};

const checkValidYear = (value) => {
  if (!checkValidNumber(value)) {
    return false;
  }
  const currentYear = moment().year();
  const number = +value;
  if (number < currentYear) {
    return false;
  } else {
    return true;
  }
};

//validation for time
const checkValidHour = (value) => {
  if (!checkValidNumber(value)) {
    return false;
  }
  const number = +value;
  if (number >= 1 && number <= 12) {
    return true;
  } else {
    return false;
  }
};

const checkValidMinutes = (value) => {
  if (!checkValidNumber(value)) {
    return false;
  }
  const number = +value;
  if (number >= 0 && number <= 59) {
    return true;
  } else {
    return false;
  }
};

export {
  checkValidMonth,
  checkValidDay,
  checkValidYear,
  checkValidHour,
  checkValidMinutes,
};

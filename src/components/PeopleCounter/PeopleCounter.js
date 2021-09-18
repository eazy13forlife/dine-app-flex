import React, { useState } from "react";
import { ReactComponent as IconMinus } from "../../images/icons/icon-minus.svg";
import { ReactComponent as IconPlus } from "../../images/icons/icon-plus.svg";
import "./PeopleCounter.scss";

const PeopleCounter = ({ field, form, ...props }) => {
  const [people, setPeople] = useState(props.initialValue);

  const decrementPeople = () => {
    if (people === 1) {
      return;
    }
    setPeople(people - 1);
    form.setFieldValue(field.name, people - 1);
  };

  const incrementPeople = () => {
    if (people === 10) {
      return;
    }
    setPeople(people + 1);
    form.setFieldValue(field.name, people + 1);
  };

  return (
    <div className="PeopleCounter">
      <div className="PeopleCounter__icon-wrapper" onClick={decrementPeople}>
        <IconMinus className="PeopleCounter__icon PeopleCounter__icon-minus" />
      </div>

      <h3 className="tertiary-heading-large PeopleCounter__people">
        {`${people} ${people === 1 ? "person" : "people"}`}
      </h3>
      <div className="PeopleCounter__icon-wrapper" onClick={incrementPeople}>
        <IconPlus className="PeopleCounter__icon PeopleCounter__icon-plus" />
      </div>
    </div>
  );
};

export default PeopleCounter;

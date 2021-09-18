import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as ArrowIcon } from "../../images/icons/icon-arrow.svg";
import { ReactComponent as CheckmarkIcon } from "../../images/icons/icon-check.svg";
import "./Dropdown.scss";

//the props object contains field,form and meta ad everything else we passed in. so we just get the field and form by itself
const Dropdown = ({ field, form, ...props }) => {
  const dropdownRef = useRef();

  const [viewDropdown, setViewDropdown] = useState(false);
  const [selected, setSelected] = useState(props.initialValue);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
        return;
      } else {
        setViewDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  const onArrowClick = () => {
    setViewDropdown(!viewDropdown);
  };

  const onItemClick = (value) => {
    setSelected(value);
    form.setFieldValue(field.name, value);
    setViewDropdown(false);
  };

  const renderedListItems = props.values.map((value, index) => {
    return (
      <li
        className="Dropdown__item"
        key={index}
        onClick={() => {
          onItemClick(value);
        }}
      >
        <div className="Dropdown__value">
          {selected === value ? (
            <CheckmarkIcon className="Dropdown__checkmark-icon" />
          ) : null}
          {value}
        </div>
      </li>
    );
  });

  return (
    <div className="Dropdown" ref={dropdownRef}>
      <div className="Dropdown__screen">
        <span className="Dropdown__selection">{selected}</span>
        <div className="Dropdown__icon-wrapper" onClick={onArrowClick}>
          <ArrowIcon
            className={`Dropdown__arrow-icon ${
              viewDropdown ? "Dropdown__arrow-icon--rotated" : null
            } `}
          />
        </div>
      </div>
      <ul
        className={`Dropdown__list ${
          viewDropdown ? "Dropdown__list--open" : "Dropdown__list--closed"
        }`}
      >
        {renderedListItems}
      </ul>
    </div>
  );
};

export default Dropdown;

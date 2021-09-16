import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as ArrowIcon } from "../../images/icons/icon-arrow.svg";
import { ReactComponent as CheckmarkIcon } from "../../images/icons/icon-check.svg";
import "./Dropdown.scss";

const Dropdown = ({ values }) => {
  const dropdownRef = useRef();

  const [viewDropdown, setViewDropdown] = useState(false);
  const [selected, setSelected] = useState("PM");

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
    setViewDropdown(false);
  };

  const renderedListItems = values.map((value, index) => {
    return (
      <li
        className="Dropdown__item"
        key={index}
        onClick={() => {
          onItemClick(value);
        }}
      >
        {selected === value ? (
          <CheckmarkIcon className="Dropdown__checkmark-icon" />
        ) : null}
        <span className="Dropdown__value">{value}</span>
      </li>
    );
  });

  return (
    <div className="Dropdown" ref={dropdownRef}>
      <div className="Dropdown__screen">
        <span className="Dropdown__selection">{selected}</span>
        <ArrowIcon
          className={`Dropdown__arrow-icon ${
            viewDropdown ? "Dropdown__arrow-icon--rotated" : null
          } `}
          onClick={onArrowClick}
        />
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

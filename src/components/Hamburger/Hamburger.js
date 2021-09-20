import React, { useEffect, useState } from "react";
import "./Hamburger.scss";

const Hamburger = ({ number, additionalClass }) => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const newElements = [];
    for (let i = 0; i < number; i++) {
      newElements[i] = <div className="Hamburger__line" key={i}></div>;
    }
    setElements(newElements);
  }, []);

  return <div className={`Hamburger ${additionalClass}`}>{elements}</div>;
};

export default Hamburger;

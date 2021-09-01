import React, { useEffect, useState } from "react";
import "./Hamburger.scss";

const Hamburger = ({ number, width, height, className }) => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const newElements = [];
    for (let i = 0; i < number; i++) {
      newElements[i] = (
        <div
          className="Hamburger__line"
          style={{ width: width, height: height }}
          key={i}
        ></div>
      );
    }
    setElements(newElements);
  }, []);

  return (
    <div className={`Hamburger ${className}`} style={{ width: width }}>
      {elements}
    </div>
  );
};

export default Hamburger;

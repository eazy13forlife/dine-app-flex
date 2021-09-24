import React from "react";

import DescriptionCard from "../../../DescriptionCard/DescriptionCard.js";
import MenuCard from "../../../MenuCard/MenuCard.js";

import salmonPic from "../../../../images/homepage/salmon-desktop-tablet.jpg";
import moussePic from "../../../../images/homepage/chocolate-desktop-tablet.jpg";
import filetMignonPic from "../../../../images/homepage/beef-desktop-tablet.jpg";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <DescriptionCard
        heading="A few highlights from our menu"
        bodyText="We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season."
        className="Menu__description-card"
        color="var(--light)"
      />
      <div className="Menu__items">
        <MenuCard
          name="salmon"
          heading="Seared Salmon Filet"
          bodyText="Our locally sourced salmon served with a refreshing buckwheat summer salad."
          className="Menu__salmon"
        />
        <MenuCard
          name="beef"
          heading="Rosemary Filet Mignon"
          bodyText="Our primed beef served to your taste with a delicious choice of seasonal sides."
          className="Menu__filet"
        />
        <MenuCard
          name="mousse"
          heading="Summer Fruit Chocolate Mousse"
          bodyText="Creamy mousse combined with summer fruits and dark chocolate servings."
          className="Menu__mousse"
        />
      </div>
    </div>
  );
};

export default Menu;

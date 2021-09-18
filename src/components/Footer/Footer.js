import React from "react";
import { ReactComponent as DineLogo } from "../../images/logo.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <DineLogo className="Footer__logo" />
      <address className="Footer__address">
        <h3 className="tertiary-heading-small-footer">
          marthwaite,sedbergh
          <br />
          cumbria
          <br />
          +00 44 123 4567
        </h3>
      </address>
      <div className="Footer__hours">
        <h3 className="tertiary-heading-small-footer">
          Open times
          <br /> Mon-fru:09:00Am -10:00PM
          <br /> Sat-Sun:09:00Am-11:30pm
        </h3>
      </div>
    </div>
  );
};

export default Footer;

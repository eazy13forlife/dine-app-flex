const templates = require.context("./", true, /\.(jpg|png|svg|jpe?g)$/);
import camelCase from "camelcase";

import heroBgDesktopJpg from "./booking/hero-bg-desktop.jpg";
import heroBgDesktop2XJpg from "./booking/hero-bg-desktop@2x.jpg";
import heroBgMobileJpg from "./booking/hero-bg-mobile.jpg";
import heroBgMobile2XJpg from "./booking/hero-bg-mobile@2x.jpg";
import heroBgTabletJpg from "./booking/hero-bg-tablet.jpg";
import heroBgTablet2XJpg from "./booking/hero-bg-tablet@2x.jpg";
import favicon32X32Png from "./favicon-32x32.png";
import beefDesktopTabletJpg from "./homepage/beef-desktop-tablet.jpg";
import beefDesktopTablet2XJpg from "./homepage/beef-desktop-tablet@2x.jpg";
import beefMobileJpg from "./homepage/beef-mobile.jpg";
import beefMobile2XJpg from "./homepage/beef-mobile@2x.jpg";
import chocolateDesktopTabletJpg from "./homepage/chocolate-desktop-tablet.jpg";
import chocolateDesktopTablet2XJpg from "./homepage/chocolate-desktop-tablet@2x.jpg";
import chocolateMobileJpg from "./homepage/chocolate-mobile.jpg";
import chocolateMobile2XJpg from "./homepage/chocolate-mobile@2x.jpg";
import enjoyablePlaceDesktopJpg from "./homepage/enjoyable-place-desktop.jpg";
import enjoyablePlaceDesktop2XJpg from "./homepage/enjoyable-place-desktop@2x.jpg";
import enjoyablePlaceMobileJpg from "./homepage/enjoyable-place-mobile.jpg";
import enjoyablePlaceMobile2XJpg from "./homepage/enjoyable-place-mobile@2x.jpg";
import enjoyablePlaceTabletJpg from "./homepage/enjoyable-place-tablet.jpg";
import enjoyablePlaceTablet2XJpg from "./homepage/enjoyable-place-tablet@2x.jpg";
import familyGatheringDesktopJpg from "./homepage/family-gathering-desktop.jpg";
import familyGatheringDesktop2XJpg from "./homepage/family-gathering-desktop@2x.jpg";
import familyGatheringMobileJpg from "./homepage/family-gathering-mobile.jpg";
import familyGatheringMobile2XJpg from "./homepage/family-gathering-mobile@2x.jpg";
import familyGatheringTabletJpg from "./homepage/family-gathering-tablet.jpg";
import familyGatheringTablet2XJpg from "./homepage/family-gathering-tablet@2x.jpg";

import locallySourcedDesktopJpg from "./homepage/locally-sourced-desktop.jpg";
import locallySourcedDesktop2XJpg from "./homepage/locally-sourced-desktop@2x.jpg";
import locallySourcedMobileJpg from "./homepage/locally-sourced-mobile.jpg";
import locallySourcedMobile2XJpg from "./homepage/locally-sourced-mobile@2x.jpg";
import locallySourcedTabletJpg from "./homepage/locally-sourced-tablet.jpg";
import locallySourcedTablet2XJpg from "./homepage/locally-sourced-tablet@2x.jpg";
import readyBgDesktopJpg from "./homepage/ready-bg-desktop.jpg";
import readyBgDesktop2XJpg from "./homepage/ready-bg-desktop@2x.jpg";
import readyBgMobileJpg from "./homepage/ready-bg-mobile.jpg";
import readyBgMobile2XJpg from "./homepage/ready-bg-mobile@2x.jpg";
import readyBgTabletJpg from "./homepage/ready-bg-tablet.jpg";
import readyBgTablet2XJpg from "./homepage/ready-bg-tablet@2x.jpg";
import salmonDesktopTabletJpg from "./homepage/salmon-desktop-tablet.jpg";
import salmonDesktopTablet2XJpg from "./homepage/salmon-desktop-tablet@2x.jpg";
import salmonMobileJpg from "./homepage/salmon-mobile.jpg";
import salmonMobile2XJpg from "./homepage/salmon-mobile@2x.jpg";
import socialEventsDesktopJpg from "./homepage/social-events-desktop.jpg";
import socialEventsDesktop2XJpg from "./homepage/social-events-desktop@2x.jpg";
import socialEventsMobileJpg from "./homepage/social-events-mobile.jpg";
import socialEventsMobile2XJpg from "./homepage/social-events-mobile@2x.jpg";
import socialEventsTabletJpg from "./homepage/social-events-tablet.jpg";
import socialEventsTablet2XJpg from "./homepage/social-events-tablet@2x.jpg";
import specialEventsDesktopJpg from "./homepage/special-events-desktop.jpg";
import specialEventsDesktop2XJpg from "./homepage/special-events-desktop@2x.jpg";
import specialEventsMobileJpg from "./homepage/special-events-mobile.jpg";
import specialEventsMobile2XJpg from "./homepage/special-events-mobile@2x.jpg";
import specialEventsTabletJpg from "./homepage/special-events-tablet.jpg";
import specialEventsTablet2XJpg from "./homepage/special-events-tablet@2x.jpg";
import iconArrowSvg from "./icons/icon-arrow.svg";
import iconCheckSvg from "./icons/icon-check.svg";
import iconMinusSvg from "./icons/icon-minus.svg";
import iconPlusSvg from "./icons/icon-plus.svg";
import logoSvg from "./logo.svg";
import patternCurveBottomRightSvg from "./patterns/pattern-curve-bottom-right.svg";
import patternCurveTopLeftSvg from "./patterns/pattern-curve-top-left.svg";
import patternCurveTopRightSvg from "./patterns/pattern-curve-top-right.svg";
import patternDivideSvg from "./patterns/pattern-divide.svg";
import patternLinesSvg from "./patterns/pattern-lines.svg";

const images = {
  heroBgDesktopJpg,
  heroBgDesktop2XJpg,
  heroBgMobileJpg,
  heroBgMobile2XJpg,
  heroBgTabletJpg,
  heroBgTablet2XJpg,
  favicon32X32Png,
  beefDesktopTabletJpg,
  beefDesktopTablet2XJpg,
  beefMobileJpg,
  beefMobile2XJpg,
  chocolateDesktopTabletJpg,
  chocolateDesktopTablet2XJpg,
  chocolateMobileJpg,
  chocolateMobile2XJpg,
  enjoyablePlaceDesktopJpg,
  enjoyablePlaceDesktop2XJpg,
  enjoyablePlaceMobileJpg,
  enjoyablePlaceMobile2XJpg,
  enjoyablePlaceTabletJpg,
  enjoyablePlaceTablet2XJpg,
  familyGatheringDesktopJpg,
  familyGatheringDesktop2XJpg,
  familyGatheringMobileJpg,
  familyGatheringMobile2XJpg,
  familyGatheringTabletJpg,
  familyGatheringTablet2XJpg,
  locallySourcedDesktopJpg,
  locallySourcedDesktop2XJpg,
  locallySourcedMobileJpg,
  locallySourcedMobile2XJpg,
  locallySourcedTabletJpg,
  locallySourcedTablet2XJpg,
  readyBgDesktopJpg,
  readyBgDesktop2XJpg,
  readyBgMobileJpg,
  readyBgMobile2XJpg,
  readyBgTabletJpg,
  readyBgTablet2XJpg,
  salmonDesktopTabletJpg,
  salmonDesktopTablet2XJpg,
  salmonMobileJpg,
  salmonMobile2XJpg,
  socialEventsDesktopJpg,
  socialEventsDesktop2XJpg,
  socialEventsMobileJpg,
  socialEventsMobile2XJpg,
  socialEventsTabletJpg,
  socialEventsTablet2XJpg,
  specialEventsDesktopJpg,
  specialEventsDesktop2XJpg,
  specialEventsMobileJpg,
  specialEventsMobile2XJpg,
  specialEventsTabletJpg,
  specialEventsTablet2XJpg,
  iconArrowSvg,
  iconCheckSvg,
  iconMinusSvg,
  iconPlusSvg,
  logoSvg,
  patternCurveBottomRightSvg,
  patternCurveTopLeftSvg,
  patternCurveTopRightSvg,
  patternDivideSvg,
  patternLinesSvg,
};

const populateImagesObject = (imagesArray) => {
  for (let i = 0; i < imagesArray.length; i++) {
    /*
    const relativeImgPath = imagesArray[i];
    const splitPathArray = relativeImgPath.split("/");

    const imgName = splitPathArray[splitPathArray.length - 1];

    //get all the `import[name] from "[image file path]"`
    console.table(`import ${camelCase(imgName)} from "${relativeImgPath}"`);

    //get all the names of the pic in camelCase, followed by a comma, so I can use in object
    console.table(`${camelCase(imgName)},`);
    */
  }
};

populateImagesObject(templates.keys());

export default images;

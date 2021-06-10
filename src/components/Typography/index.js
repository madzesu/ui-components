import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Label from "./Label";
import Paragraph from "./Paragraph";

const getTypographyComponent = (variant) => {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return Header(variant);
    case 'label':
    case 'button':
      return Label(variant);
    default:
      return Paragraph();
  }
};

const Typography = ({ variant, ...props }) => {
  const Component = getTypographyComponent(variant);
  return <Component {...props} />;
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "button",
    "p",
    "caption",
  ]),
};

export default Typography;

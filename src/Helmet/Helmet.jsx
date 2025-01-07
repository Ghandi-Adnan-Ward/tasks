/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Helmet = (props) => {
  document.title = props.title + ' page';
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;

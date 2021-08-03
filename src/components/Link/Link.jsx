import React from "react";

import { ReactComponent as UrlIcon } from "../icons/link.svg";

import "./Link.css";

const Link = ({ url, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="url-link"
    >
      <h1 className="url-header">{title}</h1>
    </a>
  );
};

export default Link;

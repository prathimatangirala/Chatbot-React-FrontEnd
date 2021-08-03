import React from "react";
import Link from "../Link/Link";

const UrlText = () => {
  const getUrl = () => {
    return `https://www.csu.edu/`;
  };

  return <Link url={getUrl()} title={"Here is CSU WebSite"} />;
};


export default UrlText;


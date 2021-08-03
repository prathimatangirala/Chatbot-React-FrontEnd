import React from "react";
import Link from "../Link/Link";

const HelpDeskLink = () => {
  const getUrl = () => {
    return `https://www.csu.edu/infotech/helpdesk.htm`;
  };

  return <Link url={getUrl()} title={"Schedule Online"} />;
};

export default HelpDeskLink;

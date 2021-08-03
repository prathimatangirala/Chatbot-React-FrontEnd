import React from "react";

import Options from "../Options/Options";

const GeneralOptions = props => {
  const options = [
    {
      name: "Just Browsing",
      handler: props.actionProvider.handleJustBrowsing,
      id: 1
    },
    {
      name: "Learn more about CSU",
      handler: props.actionProvider.handleLearnAboutUs,
      id: 2
    },
    {
      name: "Schedule an Appointment",
      handler: props.actionProvider.handleBookAnAppointment,
      id: 3
    },
    {
      name: "Live Chat Help",
      handler: props.actionProvider.handleLivehelp,
      id: 4
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;

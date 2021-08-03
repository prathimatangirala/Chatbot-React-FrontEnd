import React from "react";

import Options from "../Options/Options";

const AppointmentOptions = props => {
  const options = [
    {
      name: "Schedule through Help Desk",
      handler: props.actionProvider.handleHelpDesk,
      id: 1
    },
    {
      name: "Send a Appointment Request",
      handler: props.actionProvider.handleSendRequest,
      id: 2
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default AppointmentOptions;

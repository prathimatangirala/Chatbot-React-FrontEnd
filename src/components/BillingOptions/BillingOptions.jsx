import React from "react";

import Options from "../Options/Options";

const BillingOptions = props => {
  const options = [
    {
      name: "Account Balance",
      handler: props.actionProvider.handleBillAndPaymentsAccountBalance,
      id: 1
    },
    {
      name: "Recent Payments",
      handler: props.actionProvider.handleBillAndPaymentsRecentPayments,
      id: 2
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default BillingOptions;

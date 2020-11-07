import React from "react";
import AddConstituencyForm from "../../../../screens/AdminDashboard/Overview/AddConstituencyForm";
import {withAdminAuthSync} from "../../../../lib/apollo/withAuthSync";

const BackOfficeAddConstituency = () => {
  return (
    <div>
      <AddConstituencyForm />
    </div>
  );
};

export default withAdminAuthSync(BackOfficeAddConstituency);

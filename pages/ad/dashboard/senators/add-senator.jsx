import React from 'react';
import AddSenatorsForm from "../../../../screens/AdminDashboard/Senators/AddSenatorsForm";
import {withAdminAuthSync} from "../../../../lib/apollo/withAuthSync";

const BackOfficeAddSenator = () => {
  return (
    <div>
      <AddSenatorsForm />
    </div>
  );
};

export default withAdminAuthSync(BackOfficeAddSenator);

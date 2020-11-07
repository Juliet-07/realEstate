import React from 'react';
import AddLegislatorsForm from "../../../../screens/AdminDashboard/Legislators/AddLegislatorsForm";
import {withAdminAuthSync} from "../../../../lib/apollo/withAuthSync";

const BackOfficeAddLegislator = () => {
  return (
    <div>
      <AddLegislatorsForm />
    </div>
  );
};

export default withAdminAuthSync(BackOfficeAddLegislator);

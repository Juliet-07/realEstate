import React from 'react'
import AdminLegislators from '../../../../screens/AdminDashboard/Legislators'
import {withAdminAuthSync} from "../../../../lib/apollo/withAuthSync";

const BackOfficeLegislator = () => {
  return (
    <div>
      <AdminLegislators />
    </div>
  )
}

export default withAdminAuthSync(BackOfficeLegislator)

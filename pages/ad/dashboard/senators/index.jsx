import React from 'react'
import AdminSenators from '../../../../screens/AdminDashboard/Senators'
import {withAdminAuthSync} from "../../../../lib/apollo/withAuthSync";

const BackOfficeSenators = () => {
  return (
    <div>
      <AdminSenators />
    </div>
  )
}

export default withAdminAuthSync(BackOfficeSenators)

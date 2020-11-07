import React from 'react'
import AdminUsers from '../../../../screens/AdminDashboard/Users'
import {withAdminAuthSync} from "../../../../lib/apollo/withAuthSync";

const BackOfficeUsers = () => {
  return (
    <div>
      <AdminUsers />
    </div>
  )
}

export default withAdminAuthSync(BackOfficeUsers)

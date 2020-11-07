import React from 'react'
import AdminOverview from '../../../screens/AdminDashboard/Overview'
import {withAdminAuthSync} from "../../../lib/apollo/withAuthSync";

const AdminDashboard = () => {
  return (
    <div>
      <AdminOverview/>
    </div>
  )
}

export default withAdminAuthSync(AdminDashboard)

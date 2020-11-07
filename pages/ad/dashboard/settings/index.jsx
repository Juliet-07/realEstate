import React from 'react'
import AdminSettings from '../../../../screens/AdminDashboard/Settings'
import {withAdminAuthSync} from "../../../../lib/apollo/withAuthSync";

const SettingsBackOffice = () => {
  return (
    <div>
      <AdminSettings />
    </div>
  )
}

export default withAdminAuthSync(SettingsBackOffice)

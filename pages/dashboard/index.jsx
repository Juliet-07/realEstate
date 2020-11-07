import React from 'react'
import Overview from '../../screens/UserDashboard/Overview'
import {withAuthSync} from "../../lib/apollo/withAuthSync";

const Dashboard = () => {
  return (
    <div>
      <Overview />
    </div>
  )
}

export default withAuthSync(Dashboard)

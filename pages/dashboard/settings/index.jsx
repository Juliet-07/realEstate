import React from 'react';
import UserSettings from "../../../screens/UserDashboard/UserSettings";
import {withAuthSync} from "../../../lib/apollo/withAuthSync";


const Settings = () => {
  return (
    <div>
      <UserSettings />
    </div>
  );
};

export default withAuthSync(Settings);

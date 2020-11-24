/**
 * Application context
 * */

import { createContext } from 'react';

const AppContext = createContext({
  user: {},
  app: {
    largeDrawer: process.browser
      ? JSON.parse(sessionStorage.getItem("ElR-largeDrawer"))
      : true,
    noDrawer: process.browser
      ? JSON.parse(sessionStorage.getItem("ElR-noDrawer"))
      : false
  }
});

export default AppContext
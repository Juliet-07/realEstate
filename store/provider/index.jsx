/**
 * Author: George Favour
 * Date: 12th, August 2020
 * Application provider
 * */

import React, {useContext, useEffect, useReducer} from "react";
import AppContext from "../context";
import {userReducer} from "../reducer/userReducer";
import {SET_CURRENT_USER} from "../types";
import {useQuery} from "@apollo/client";
import {CURRENT_USER} from "../../lib/queries/index.gql";
import Loader from "../../components/Loaders";
import {ToastMessage, type} from "../../components/ToastMessage";

const Provider = ({children}) => {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(userReducer, initialState);
  const {data, error, loading} = useQuery(CURRENT_USER);

  useEffect(() => {
    if (data && data.getCurrentUser) {
      dispatch({
        type: SET_CURRENT_USER,
        payload: data.getCurrentUser
      })
    }
  }, [data]);


  if (loading) return <Loader color={"#003333"} fullPage/>;
  if (error && !error.message.includes('Login')) ToastMessage(type.ERROR, error.message)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider;
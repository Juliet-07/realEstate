/*
 * page: Home
 * author: Juliet Kelechi
 * Date: September, 20, 2020
 */
import React from 'react';
import GeneralLayout from '../components/Layout/GeneralLayout';
import Landing from "../screens/LandingPage";
import withApollo from "../lib/apollo/withApollo";

const Home = () => {

  return (
    <GeneralLayout>
      <Landing/>
    </GeneralLayout>
  );
};

export default withApollo(Home);

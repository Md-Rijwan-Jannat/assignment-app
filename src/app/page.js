import React from 'react';
import Banner from './components/Header/HomePage/Banner';
import ForTheBody from './components/Header/HomePage/ForTheBody';
import TheAthenaeum from './components/Header/HomePage/TheAthenaeum';
import ForTheSkin from './components/Header/HomePage/ForTheSkin';
import SubFooter from './components/Header/SubFooter';
import StoreLocator from './components/Header/HomePage/StoreLocator';
import Drops from './components/Header/HomePage/Drops';
import ForTheHome from './components/Header/HomePage/ForTheHome';

const page = () => {
  return (
    <>
    <Banner></Banner>
    <ForTheBody></ForTheBody>
    <TheAthenaeum></TheAthenaeum>
    <ForTheSkin></ForTheSkin>
    <Drops></Drops>
    <ForTheHome></ForTheHome>
    <StoreLocator></StoreLocator>
    <SubFooter></SubFooter>
    </>
  );
};

export default page;
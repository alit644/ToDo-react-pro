// import React from 'react';

import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/MainContent';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <>
     <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header />
      <MainContent mainPage="The Home" />
      <Footer />
    </>
  );
};

export default Home;

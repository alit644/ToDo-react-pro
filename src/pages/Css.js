import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/MainContent';
import { Helmet } from 'react-helmet-async';

const Css = () => {
  return (
    <>
     <Helmet>
        <title>Css Page</title>
      </Helmet>
      <Header />
      <MainContent mainPage="Css" />

      <Footer />
    </>
  );
};

export default Css;

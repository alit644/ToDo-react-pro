import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from 'react-helmet-async';
const Javascript = () => {

  return (
    <>
       <Helmet>
        <title>JavaScript Page</title>
      </Helmet>
        <Header />
    
        <MainContent mainPage="JavaScript" />
    
        <Footer />
    </>
  );
};

export default Javascript;

import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";


const Html = () => {

  return (
    <>
      <Helmet>
        <title>Html Page</title>
      </Helmet>
        <Header />
        <MainContent mainPage="HTML" />
        <Footer />
    </>
  );
};

export default Html;

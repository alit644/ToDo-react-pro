import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect  } from 'react';
import { useNavigate } from "react-router-dom";


import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/confing";

const Html = () => {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  })
  return (
    <>

    {}
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

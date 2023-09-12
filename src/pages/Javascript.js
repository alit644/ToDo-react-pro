import Header from "../comp/header";
import Footer from "../comp/footer";
// import MainContent from "../comp/MainContent";
import { Helmet } from 'react-helmet-async';
import { auth } from "../firebase/confing";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect  } from 'react';
import { useNavigate } from "react-router-dom";



const Javascript = () => {
  const navigate = useNavigate();

const [user, loading, error] = useAuthState(auth);
useEffect(() => {
  if (!user && !loading) {
    navigate("/")
  }

  if (user) {
    if (!user.emailVerified) {
      navigate("/")
    }
  }
})

if (loading) {
  return (
    <div>
      <p>Initialising User...</p>
    </div>
  );
}


  

  if (user) {
    return (
      <>
         <Helmet>
          <title>Profile Page</title>
        </Helmet>
          <Header />
              <main style={{ flexDirection: "column"}}>
                <h3>Email: {user.email}</h3>
                <h3>UserName: {user.displayName}</h3>
                <h3>UserName: {user.metadata.lastSignInTime}</h3>
                <h3>UserName: {user.metadata.creationTime}</h3>
              </main>
  
          <Footer />
      </>
    );
  }



};

export default Javascript;
;
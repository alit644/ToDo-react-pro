import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from 'react';
import { auth } from "../firebase/confing";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
const SingUp = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [errorState, seterrorState] = useState(false);
  const [errorMsg, seterrorMsg] = useState();

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  })
  
  if (loading) {
    return(
      <>
        <main>
          <h3>Lodaing ............</h3>
        </main>
      </>
    )
  }





  if (!user) {
    return (
      <>
        <Helmet>
          <title>Sing in Page</title>
        </Helmet>
        <Header />
        <main>
          <form>
            <p style={{ fontSize: "23px", marginBottom: "23px" }}>
              create a new account 🧡
            </p>
  
            <input
              onChange={(eo) => {
                setuserName(eo.target.value);
              }}
              type="text"
              placeholder="userName"
              required
            />
  
            <input
              onChange={(eo) => {
                setemail(eo.target.value);
              }}
              type="email"
              placeholder="enter your email"
              required
            />
            <input
              onChange={(eo) => {
                setpassword(eo.target.value);
              }}
              type="password"
              placeholder="password"
              required
            />
            <button
              onClick={(eo) => {
                eo.preventDefault();
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
  
                    sendEmailVerification(auth.currentUser).then(() => {
                      // Email verification sent!
                      // ...
                    });
  
                    updateProfile(auth.currentUser, {
                      displayName: userName,
                    })
                      .then(() => {
                        // Profile updated!
                        // ...
                      })
                      .catch((error) => {
                        console.log(error);
                        // An error occurred
                        // ...
                      });
  
                    // ...
                    navigate("/");
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    // ..
                    seterrorState(true);
  
                    switch (errorCode) {
                      case "auth/invalid-email":
                        seterrorMsg("Wrong Email");
                        break;
  
                      case "auth/user-not-found":
                        seterrorMsg("Wrong Email");
                        break;
  
                      case "auth/wrong-password":
                        seterrorMsg("Wrong Password");
                        break;
  
                      case "auth/too-many-requests":
                        seterrorMsg("Too many requests, please try aganin later");
                        break;
  
                      default:
                        seterrorMsg("Please check your email & password");
                        break;
                    }
                  });
              }}
            >
              Sing Up
            </button>
            <p className="account">
              Already have an account <Link to="/SingIn">Sing In</Link>
            </p>
            {errorState && <h2>{errorMsg}</h2>}
          </form>
        </main>
        <Footer />
      </>
    );
  }

  
};

export default SingUp;

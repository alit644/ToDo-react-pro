import Header from "../comp/header";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/confing";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forgot.css";
const SingIn = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errorState, seterrorState] = useState(false);
  const [errorMsg, seterrorMsg] = useState();
  const [checkeEmailMss, setcheckeEmailMss] = useState(false);
  const [showFomr, setshowFomr] = useState("");

  return (
    <>
      <Helmet>
        <title>Sing Up Page</title>
      </Helmet>
      <Header />
      <main>
        <form className={`forgot-pass ${showFomr}`}>
          <div
            onClick={() => {
              setshowFomr("");
            }}
            className="close"
          >
            x
          </div>
          <input type="email" placeholder="Email" required />
          <button
            onClick={(eo) => {
              eo.preventDefault();

              const auth = getAuth();
              sendPasswordResetEmail(auth, email)
                .then(() => {
                  // Password reset email sent!
                  // ..
              setcheckeEmailMss(true);

                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode)
                  // ..
                });
            }}
          >
            Reast email
          </button>
          {checkeEmailMss && (
            <p className="checj-email">
              Please chech your email to reset your password
            </p>
          )}
        </form>

        <form>
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            type="email"
            placeholder="Email"
            required
          />

          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            type="password"
            placeholder="Password"
            required
          />

          <button
            onClick={(eo) => {
              eo.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  // ...
                  navigate("/");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
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
            Sing in
          </button>
          <p className="account">
            Dont' have an account <Link to="/SingUp">Sing Up</Link>
          </p>

          <p
            onClick={() => {
              setshowFomr("show-forgot-form");
            }}
            className="forgotBtn"
          >
            forgot password
          </p>

          {errorState && <h2>{errorMsg}</h2>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SingIn;

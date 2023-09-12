// import React from 'react';

import Header from "../../comp/header";
import Footer from "../../comp/footer";
import { Helmet } from "react-helmet-async";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/confing";
import "./Home.css";
import { Link } from "react-router-dom";

//! loding
//! Not sign-in
//! Not sign-in Email verification
//! Not sign-in && verified email => nav(/)

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <>
        <main>
          <h3>Lodaing ............</h3>
        </main>
      </>
    );
  }

  if (user) {
    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Home Page</title>
          </Helmet>
          <Header />
          {user && (
            <main>
              welcome {user.displayName} ... 🧡
              <br />
              <h3>من فضلك قم بتأكيد الحساب </h3>
            </main>
          )}

          <Footer />
        </>
      );
    }

    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Home Page</title>
          </Helmet>
          <Header />
          <main className="home">
            {/* option */}
            <section className="parent-of-btns flex mt">
              <button>Newest first</button>
              <button>oldest first</button>
              <select id="opt">
                <option value="allTasks">All Tasks</option>
                <option value="completed">Completed</option>
                <option value="not-completed ">Not Completed</option>
              </select>
            </section>

            {/* all task  */}
            <section className="all-task flex">
              <Link to="/edit-task">
                <article dir="auto" className="one-task">
                  <h2>New Task</h2>
                  <ul>
                    <li>sun Task</li>
                    <li>sun Task</li>
                  </ul>
                  <p className="time">a day ago</p>
                </article>
              </Link>
            </section>

            {/* add btn new task */}
            <section className="mt">
              <button className="add-new-task">
                add new task <b>+</b>
              </button>
            </section>
          </main>
          <Footer />
        </>
      );
    }
  }
};

export default Home;

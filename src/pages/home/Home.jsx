import Header from "../../comp/Header/header";
import Footer from "../../comp/Footer";
import Loading from "../../comp/Loading";
import Erroe404 from "../erroe404";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";

// Level 3
import "./Home.css";
import Model from "Shared/model/Model";
import { useState } from "react";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const [showmodal, setshowmodal] = useState(false);
  const closeModel = () => {
    setshowmodal(false);
  };

  const sendAgain = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email verification sent!");
      // ...
    });
  };

  if (error) {
    return <Erroe404 />;
  }

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <>
        <Helmet>
          <title>HOME Page</title>
          <style type="text/css">{`.Light main h1 span{color: #222}   `}</style>
        </Helmet>

        <Header />

        <main>
          <h1 style={{ fontSize: "28px" }}>
            {" "}
            <span>
              Welcome to our application <i className="fa-solid fa-cow"></i>
            </span>{" "}
          </h1>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue...{" "}
            <span>
              <i className="fa-solid fa-heart"></i>
            </span>
          </p>
        </main>

        <Footer />
      </>
    );
  }

  if (user) {
    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

          <Header />

          <main>
            <p>
              {" "}
              Welcome: {user.displayName}{" "}
              <span>
                <i className="fa-solid fa-heart"></i>{" "}
              </span>
            </p>

            <p>Please verify your email to continue ✋ </p>
            <button
              onClick={() => {
                sendAgain();
              }}
              className="delete"
            >
              Send email
            </button>
          </main>

          <Footer />
        </>
      );
    }

    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>HOME Page</title>
          </Helmet>

          <Header />

          <main className="home">
            {/* button option and filtre data */}
            <section className="parent_btn flex mt">
              <button>Newest First</button>
              <button>Olwest First</button>
              <select id="browsers">
                <option value="xxxxx"> All task </option>
                <option value="xxxxx"> Completed </option>
                <option value="xxxxxx"> Not Completed </option>
              </select>
            </section>
            {/* show data ============================================================*/}

            <section className="flex all-tasks mt">
              <article dir="auto" className="one-task">
                <Link to={"/EditTask"}>
                  <h2>New Task</h2>
                  <ul>
                    <li>sub task 1</li>
                    <li>sub task 2</li>
                  </ul>
                  <p className="time">a day ago</p>
                </Link>
              </article>
            </section>

            {/* button add new task */}

            <section className="mt">
              <button
                onClick={() => {
                  setshowmodal(true);
                }}
                className="add-task-btn"
              >
                Add New Task <i className="fa-solid fa-plus"></i>
              </button>

              {showmodal && (
                <Model closeModel={closeModel}>
              
                <div style={{textAlign:"left"}}>
                      <input
                        onChange={(eo) => {}}
                        required
                        placeholder=" Add title : "
                        type="text"
                      />
                      
                  
                  <div>
                      <input
                        onChange={(eo) => {}}
                    
                        placeholder=" Detail : "
                        type="text"
                      />
                        <button onClick={(eo) => {
                        eo.preventDefault();
                      }}>Add</button>
                  </div>
                      <button onClick={(eo) => {
                        eo.preventDefault();
                      }}>Submit</button>
                </div>
                </Model>
              )}
            </section>
          </main>

          <Footer />
        </>
      );
    }
  }
};

export default Home;

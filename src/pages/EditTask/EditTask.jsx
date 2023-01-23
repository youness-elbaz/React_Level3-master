import Footer from "comp/Footer";
import Header from "comp/Header/header";
import React from "react";
import { Helmet } from "react-helmet-async";
import "./EditTask.css";
const EditTask = () => {
  return (
    <>
      <Helmet>
        <title>Page EditTask</title>
      </Helmet>

      <Header />
      <div className="Edit-Task">
        {/* Titel Section */}
        <section className="titel center">
          <h1>
            <input
              value={"ELbaz Youness"}
              className="titel-input center"
              type="text"
              name="titel"
              id="titel"
            />
            <i className="fa-regular fa-pen-to-square"></i>
          </h1>
        </section>
        {/* sub tasks section */}
        <section className="sub-Task">
          <div className="parent-Time">
            <p className="time">Created :06 days ago</p>
            <div>
              <input type="checkbox" name="Task Completed" id="TaskCheked" />
              <label htmlFor="TaskCheked">Task Completed</label>
            </div>
          </div>
          <ul>
              <li className="CardTask">
              <p>sub task1 </p> 
              <i className="fa-solid fa-trash-can"></i> 
                </li>
                <li className="CardTask">
              <p>sub task1 </p> 
              <i className="fa-solid fa-trash-can"></i> 
                </li>
            </ul>
        </section>

        {/* Btn add && Btn Delete */}
        <section className="parentBtn mtt center">
        <button className="add-more-btn">Add more <i className="fa-solid fa-plus"></i> </button>
        <button className="delete ">Delete <i className="fa-solid fa-minus"></i> </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EditTask;

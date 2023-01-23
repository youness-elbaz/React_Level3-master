import React from "react";
import "./model.css";

const Model = ({ closeModel,children }) => {
  return (
    <div className="parent-of-model">
      <form className={`modal`}>
        <div
          onClick={() => {
            closeModel();
          }}
          className="close"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>

        {children}
        
      </form>
    </div>
  );
};

export default Model;


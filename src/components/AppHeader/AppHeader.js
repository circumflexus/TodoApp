import React from "react";
import "./AppHeader.css";

const AppHeader = ({toDo ,done}) => {
    return (
      <div className="app-header d-flex">
        <h1>Todo list</h1>
        <h2>To do: {toDo} Done: {done}</h2>
      </div>
    );
  };

  export default AppHeader;
import React from "react";
import "./AppHeader.css";

const AppHeader = ({toDo ,done}) => {
    return (
      <div className="app-header">
        <h1>Todo list</h1>
        <h2>To do: {toDo} Done: {done}</h2>
      </div>
    );
  };

  export default AppHeader;
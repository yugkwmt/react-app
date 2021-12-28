import React from "react";
import "../style.css";

export const CompleteTodo = (props) => {
  const { todos, OnClickBack } = props;

  const style = {
    backgroundColor: "#ffffe0",
    width: "400px",
    height: "200px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => OnClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

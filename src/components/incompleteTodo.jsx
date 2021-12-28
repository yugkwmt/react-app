import React from "react";
import "../style.css";

export const IncompleteTodo = (props) => {
  const { todos, OnclickComplete, OnclickDelete } = props;

  const style = {
    backgroundColor: "#c6ffe2",
    width: "400px",
    height: "200px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => OnclickComplete(index)}>完了</button>
              <button onClick={() => OnclickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

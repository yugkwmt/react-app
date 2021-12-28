import React from "react";
import "../style.css";

export const InputTodo = (props) => {
  const { todoText, onChange, Onclick, disabled } = props;

  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px"
  };

  return (
    <div style={style}>
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={Onclick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};

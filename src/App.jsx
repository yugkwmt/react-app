/* eslint react-hooks/exhaustive-deps: off*/
import React, { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/inputTodo.jsx";
import { IncompleteTodo } from "./components/incompleteTodo.jsx";
import { CompleteTodo } from "./components/completeTodo.jsx";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setIncompleteTodos] = useState(["aaaa", "iiii"]);
  const [completeTodos, setCompleteTodos] = useState(["aaaa", "iiii"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const OnclickAdd = () => {
    // alert(todoText);
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const OnclickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const OnclickComplete = (index) => {
    const newImcompletes = [...imcompleteTodos];
    newImcompletes.splice(index, 1);
    const newCompletes = [...completeTodos, imcompleteTodos[index]];
    setIncompleteTodos(newImcompletes);
    setCompleteTodos(newCompletes);
  };

  const OnClickBack = (index) => {
    const newCompletes = [...completeTodos];
    newCompletes.splice(index, 1);
    const newImcompletes = [...imcompleteTodos, completeTodos[index]];
    setIncompleteTodos(newImcompletes);
    setCompleteTodos(newCompletes);
  };

  return (
    <React.Fragment>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        Onclick={OnclickAdd}
        disabled={imcompleteTodos.length >= 5}
      />
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録出来るTodoは５個まで。消化しなはれや</p>
      )}

      <IncompleteTodo
        todos={imcompleteTodos}
        OnclickComplete={OnclickComplete}
        OnclickDelete={OnclickDelete}
      />
      <CompleteTodo todos={completeTodos} OnClickBack={OnClickBack} />
    </React.Fragment>
  );
};

export default App;

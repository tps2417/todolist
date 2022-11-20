import React, { useState } from "react";
import { Card } from "../components/Card";

export const Todo = () => {
  // const [state, setState] = useState("");
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputText = (event) => {
    setText(event.target.value);
  };

  const addTask = () => {
    const copyTodoList = [...todoList];
    copyTodoList.push(text);
    setTodoList(copyTodoList);
  };

  return (
    <div style={styles.todoContainer}>
      <div>
        <input id="text" onChange={(e) => inputText(e)}></input>
        <button onClick={addTask}>＋</button>
      </div>

      <div style={styles.card}>
        {todoList.map(function (value) {
          console.log("value;", value);
          return <Card title={value} />;
        })}
      </div>
    </div>
  );
};

const styles = {
  todoContainer: {
    backgroundColor: "tomato",
    height: 400,
    width: 300,
    margin: 40,
    borderRadius: 20,
    padding: 40,
  },

  card: {
    backgroundColor: "lightgrey",
    height: 350,
    width: 300,
    marginTop: 60,
  },
};

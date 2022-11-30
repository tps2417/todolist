import React, { useState } from "react";
import { Card } from "../components/Card";

export const Todo = () => {
  // const [state, setState] = useState("");
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputText = (event) => {
    console.log(event);
    setText(event.target.value);
  };

  const addTask = () => {
    const copyTodoList = [...todoList];
    copyTodoList.push(text);
    setTodoList(copyTodoList);
    setText("");
  };

  // console.log("todoList:", todoList);

  const deleteTask = (index) => {
    console.log("index:", index);
    const todoListFilter = todoList.filter((todo, todoIndex) => {
      console.log(todoList);
      return todoIndex !== index;
    });
    setTodoList(todoListFilter);
    console.log(todoListFilter);
  };
  // console.log(todoListFilter);
  // setTodoList(todoListFilter);

  // console.log("todoListFilter:", todoListFilter);

  return (
    <div style={styles.todoContainer}>
      <div>
        <input
          value={text}
          placeholder="ここに入力"
          onChange={(e) => inputText(e)}
        ></input>
        <button onClick={addTask}>＋</button>
      </div>

      <div style={styles.card}>
        {todoList.map((todo, index) => {
          // console.log("ふ", index);
          return <Card onClick={() => deleteTask(index)} title={todo} />;
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

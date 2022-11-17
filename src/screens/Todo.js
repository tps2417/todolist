import React, { useState } from "react";
import { Card } from "../components/Card";

export const Todo = () => {
  // const [state, setState] = useState("");
  const [text, setText] = useState("");

  const inputText = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={styles.todoContainer}>
      <div>
        <input id="text" onChange={(e) => inputText(e)}></input>
        <button>＋</button>
      </div>

      <div style={styles.card}>
        <Card />
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

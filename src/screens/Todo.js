import React from "react";
import { Card } from "../components/Card";

export const Todo = () => {
  return (
    <div style={styles.todoContainer}>
      <div>Todo</div>
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

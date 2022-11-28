import React from "react";

export const Card = (props) => {
  console.log("props:", props);

  return (
    <div style={styles.item}>
      <div>
        {props.title}
        <button onClick={props.onClick}>✖️</button>
      </div>
    </div>
  );
};

const styles = {
  item: {
    backgroundColor: "white",
    height: 100,
    width: 260,
    // margin: 20,
  },
};

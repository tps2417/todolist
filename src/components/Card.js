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
    border: "2px solid",
    borderRadius: "20px",
    boxShadow: "4px 4px",
    // color: "gray",
    marginTop: "30px",
    padding: "20px",
    // height: 100,
    // width: 260,
    display: "flex",
    justifyContent: "center",

    // margin: 20,
  },
};

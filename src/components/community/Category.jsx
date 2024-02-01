import React from "react";
import "../../styles/styles.css";
function Category({ name, onClick }) {
  return (
    <div className="category" onClick={() => onClick(name)}>
      <h2>{name}</h2>
      <p className="last-post">Last post: [date]</p>
    </div>
  );
}

export default Category;

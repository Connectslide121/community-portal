import React from "react";
import Category from "./Category";
import "../../styles/styles.css";
function CategoryList() {
  const categories = [
    "Movies",
    "Series",
    "Books",
    "Games",
    "Music",
    "Technology",
    "Funny Images",
    "Funny Clips"
  ];

  return (
    <div>
      {categories.map((category) => (
        <Category key={category} name={category} />
      ))}
    </div>
  );
}

export default CategoryList;

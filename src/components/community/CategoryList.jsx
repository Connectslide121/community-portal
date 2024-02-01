import React from "react";
import Category from "./Category";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
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

  const navigateToCategory = (category) => {
    console.log("Navigating to " + category);
    // Implement navigation logic
  };

  return (
    <div>
      {categories.map((category) => (
        <Link
          to={`/community/${category.toLowerCase().replace(/\s/g, "")}`}
          key={category}
          className="category-link"
        >
          <Category name={category} onClick={() => navigateToCategory} />
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;

import React from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";

export default function Category({ name }) {
  return (
    <Link
      to={`/community/${name.toLowerCase().replace(/\s/g, "")}`}
      className="category-link"
    >
      <div className="category">
        <h2>{name}</h2>
        <p className="last-post">Last post: [date]</p>
      </div>
    </Link>
  );
}

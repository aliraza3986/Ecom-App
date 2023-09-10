import React from "react";
import { categories } from "./categories.js"; // Importing the categories array

export default function CategoryList() {
  return (
    <div>
      {categories.map((category) => (
        <div className="category-card" key={category.id}>
        
          <h3>{category.title}</h3>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";

const Category = ({ selectedItem }) => {
  const [category, setCategory] = useState("Cookware");

  const OnCategorySelected = (e) => {
    selectedItem(e.target.value);
  };

  return (
    <div className="input-group">
      <label className="input-label">Category</label>
      <select
        className="input-select"
        onChange={(e) => OnCategorySelected(e)}
        defaultValue={category}
      >
        <option value="Chinese">Chinese</option>
        <option value="Continental">Continental</option>
        <option value="Indian">Indian</option>
        <option value="Italian">Italian</option>
      </select>
    </div>
  );
};

export default Category;

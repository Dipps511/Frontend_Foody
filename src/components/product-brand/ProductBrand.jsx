import React, { useState } from "react";

const ProductBrand = ({ selectedItem }) => {
  const [company, setCompany] = useState("Bajaj");

  const OnCompanySelected = (e) => {
    selectedItem(e.target.value);
  };

  return (
    <div className="group-inline">
      <label className="input-label">Meal</label>
      <select
        className="input-select"
        onChange={(e) => OnCompanySelected(e)}
        defaultValue={company}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
    </div>
  );
};

export default ProductBrand;

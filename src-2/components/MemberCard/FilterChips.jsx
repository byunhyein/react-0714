import React from "react";

function FilterChips({ activeFilter, setActiveFilter }) {
  const categories = ["All", "Developer", "Designer", "Manager", "Researcher"];

  return (
    <div className="filter-chips-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-chip ${activeFilter === category ? "active" : ""}`}
          onClick={() => setActiveFilter(category)}
        >
          {category === "All" ? "모두 보기" : category}
        </button>
      ))}
    </div>
  );
}

export default FilterChips;

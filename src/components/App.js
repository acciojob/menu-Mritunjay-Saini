import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";
import items from "./data";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [category, setCategory] = useState("All");

  const filterItems = (category) => {
    setCategory(category);
    if (category === "All") {
      setMenuItems(items);
    } else {
      setMenuItems(items.filter((item) => item.category === category));
    }
  };

  return (
    <main id="main">
      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => filterItems("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems("Shakes")}>
          Shakes
        </button>
      </div>
      <Menu items={menuItems} />
    </main>
  );
}

export default App;


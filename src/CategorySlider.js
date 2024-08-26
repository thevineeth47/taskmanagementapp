// src/components/CategorySlider.js
import React from 'react';

function CategorySlider() {
  return (
    <div className="category-slider">
      {/* Slider buttons to switch between categories */}
      <button>To Do</button>
      <button>In Progress</button>
      <button>Done</button>
      <button>Timeout</button>
    </div>
  );
}

export default CategorySlider;

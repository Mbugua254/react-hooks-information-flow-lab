import React from "react";

function Filter({ onCategoryChange }){
    
    function handleCategoryChange(event) {
        onCategoryChange(event.target.value);
      }
    
    return(
       <div>
        <select name="filter" onChange={handleCategoryChange}>
          <option value="">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
       </div> 
    )
}
export default Filter;
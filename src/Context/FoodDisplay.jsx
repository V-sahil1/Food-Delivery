import React, { useContext, useState } from "react";
import { StoreContext } from "./Storecontext";
import Fooditem from "../componet/FoodDisplay/Fooditem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <>
      {/* food display */}
      <div className="mt-[30px]">
        <h2 className="text-[max(2vh,24px)] font-semibold">
          Top dishes near you
        </h2>
        {/* food-display-list */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-[30px] gap-[30px]">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <Fooditem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default FoodDisplay;

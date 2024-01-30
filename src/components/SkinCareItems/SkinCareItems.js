import React from "react";
import DisplayItem from "../DisplayItem/DisplayItem";

const SkinCareItems = (props) => {
  return (
    <ul>
      {Array.from(props.items).map((item) => (
        <DisplayItem
          key={item.ID}
          deleteItemHandler={props.onDeleteItem}
          item={item}
        ></DisplayItem>
      ))}
    </ul>
  );
};
export default SkinCareItems;

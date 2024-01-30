import React from "react";
const DisplayItem = (props) => {
  const DeleteItemHandler = (e) => {
    props.deleteItemHandler(e.target.parentElement.id);
  };
  return (
    <li id={props.item.ID}>
      {props.item.Price} - {props.item.Category} - {props.item.Name}
      <button onClick={DeleteItemHandler}>Delete Product</button>
    </li>
  );
};
export default DisplayItem;

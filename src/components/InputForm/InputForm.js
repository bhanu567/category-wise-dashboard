import React, { useRef } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const ProductIDref = useRef();
  const SellingPriceref = useRef();
  const ProductNameref = useRef();
  const ProductCategoryref = useRef();

  const SubmiteHandler = (e) => {
    e.preventDefault();
    const ProductID = ProductIDref.current.value;
    const SellingPrice = SellingPriceref.current.value;
    const ProductName = ProductNameref.current.value;
    const ProductCategory = ProductCategoryref.current.value;
    if (
      ProductID.trim().length === 0 ||
      SellingPrice.trim().length === 0 ||
      ProductName.trim().length === 0
    ) {
      prompt("Please, Enter a Valid Value");
    } else {
      const newItem = {
        ID: ProductID,
        Price: SellingPrice,
        Name: ProductName,
        Category: ProductCategory,
      };
      props.onAddNewItem(newItem);
      ProductIDref.current.value = "";
      SellingPriceref.current.value = "";
      ProductNameref.current.value = "";
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={SubmiteHandler}>
        <label htmlFor="PID">Product ID : </label>
        <input id="PID" type="number" ref={ProductIDref}></input>
        <label htmlFor="SP">Selling Price : </label>
        <input id="SP" type="number" ref={SellingPriceref}></input>
        <label htmlFor="PN">Product Name : </label>
        <input id="PN" type="text" ref={ProductNameref}></input>
        <label htmlFor="category">Choose a Category : </label>
        <select id="category" ref={ProductCategoryref}>
          <option value='food'>Food</option>
          <option value='skincare'>Skin Care</option>
          <option value='electronic'>Electronic</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </React.Fragment>
  );
};
export default InputForm;

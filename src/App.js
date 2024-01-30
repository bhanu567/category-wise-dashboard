import InputForm from "./components/InputForm/InputForm";
import { useState } from "react";
import FoodItems from "./components/FoodItems/FoodItems";
import SkinCareItems from "./components/SkinCareItems/SkinCareItems";
import ElectronicItems from "./components/ElectronicItems/ElectronicItems";

function App() {
  const [electronicItems, setElectronicItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [skincareItems, setSkincareItems] = useState([]);

  const addNewItemHandler = (newItem) => {
    localStorage.setItem(`${newItem.ID}`, JSON.stringify(newItem));
    if (newItem.Category === "food") {
      setFoodItems((prevFoodItemList) => {
        return [...prevFoodItemList, newItem];
      });
    } else if (newItem.Category === "skincare") {
      setSkincareItems((prevSkincareItemList) => {
        return [...prevSkincareItemList, newItem];
      });
    } else {
      setElectronicItems((prevElectronicItemList) => {
        return [...prevElectronicItemList, newItem];
      });
    }
  };
  const deleteElectronicItemHandler = (ID) => {
    const UpdatedElectronicItems = electronicItems.filter(
      (eitem) => eitem.ID !== ID
    );
    localStorage.removeItem(ID);
    setElectronicItems(UpdatedElectronicItems);
  };
  const deleteFoodItemHandler = (ID) => {
    const UpdatedFoodItems = foodItems.filter((fitem) => fitem.ID !== ID);
    localStorage.removeItem(ID);
    setFoodItems(UpdatedFoodItems);
  };
  const deleteSkincareItemHandler = (ID) => {
    const UpdatedSkincareItems = skincareItems.filter(
      (sitem) => sitem.ID !== ID
    );
    localStorage.removeItem(ID);
    setSkincareItems(UpdatedSkincareItems);
  };
  return (
    <div>
      <InputForm onAddNewItem={addNewItemHandler}></InputForm>
      <h1>Products : </h1>
      <h2>Electronic Items : </h2>
      <ElectronicItems
        items={electronicItems}
        onDeleteItem={deleteElectronicItemHandler}
      ></ElectronicItems>
      <h2>Food Items : </h2>
      <FoodItems
        items={foodItems}
        onDeleteItem={deleteFoodItemHandler}
      ></FoodItems>
      <h2>Skincare Items : </h2>
      <SkinCareItems
        items={skincareItems}
        onDeleteItem={deleteSkincareItemHandler}
      ></SkinCareItems>
    </div>
  );
}

export default App;

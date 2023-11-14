import React, { useEffect } from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";

const ShoppingForm = () => {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentItem);
    setItemList((oldList) => [...oldList, currentItem]);
    setCurrentItem("");
  };

  return (
    <>
      <form className="shopping-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="shopping-input"
          placeholder="Shopping List"
          value={currentItem}
          onChange={(e) => setCurrentItem(e.target.value)}
        ></input>
        <button type="submit" className="shopping-btn">
          Add Item
        </button>
      </form>
      <ShoppingList list={itemList}
        setItemList={setItemList}
      />
    </>
  );
};

export default ShoppingForm;

import React from "react";

const ShoppingList = (prop) => {
  console.log(prop);
  const deleteItem = (index) => {
    prop.setItemList((oldList) => oldList.filter((val, i) => i !== index));
  };

  return (
    <div>
      shoppingList
      {prop.list.map((i, index) => (
        <p key={index}>
          {i}
          <button onClick={() => deleteItem(index)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default ShoppingList;

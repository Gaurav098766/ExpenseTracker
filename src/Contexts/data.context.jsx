import { createContext, useState } from "react";

export const DataContext = createContext({
  data: [],
  addItem: () => {},
  deleteItem: () => {},
  deleteItemId: null,
  setDeleteItemId: () => {},
  updateId: null,
  setUpdateId: () => {},
    updateItem: () => {},
});

export const DataContextProvider = (props) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Purchased Book",
      category: "Books",
      dateofexpense: "27 Febuary, 2023",
      expenseamount: "INR 500",
      updatedat: "Just now",
      createdby: "Smith M",
    },
  ]);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [updateId, setUpdateId] = useState(null);

  const addItem = (item) => {
    setData([...data, item]);
  };

  const deleteItem = () => {
    setData(data.filter((item) => item.id !== deleteItemId));
    setDeleteItemId(null);
  };

  const updateItem = (newItem) => {
    data.map((item) => {
        if (item.id === newItem.id) {
            item.name = newItem.name;
            item.category = newItem.category;
            item.dateofexpense = newItem.dateofexpense;
            item.expenseamount = newItem.expenseamount;
            item.updatedat = newItem.updatedat;
            item.createdby = newItem.createdby;
        }
    });
            
    setUpdateId(null);
  };

  const value = {
    data,
    addItem,
    deleteItem,
    deleteItemId,
    setDeleteItemId,
    setUpdateId,
    updateId,
    updateItem,
  };
  console.log(data);

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

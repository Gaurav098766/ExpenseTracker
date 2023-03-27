import React,{useContext, useState} from "react";
import { DataContext } from "../Contexts/data.context";

const CreateExpense = ({ closeModal }) => {

    // adding items to the list
    const [items,setItems] = useState({});

    const {addItem} = useContext(DataContext)
   

  return (
    <div className="modalBackground bg-slate-300 flex justify-center align-middle py-10 absolute w-full h-full top-0">
      <div className="modalContainer w-4/12 h-6/12 bg-white shadow-black flex justify-start flex-col p-6">
        <div className="titleClosebtn flex justify-end">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title flex font-extrabold text-lg">
          <h1>Create New Expense</h1>
        </div>
        <div className="body flex justify-start">
          <form className="max-w-[400px] w-full mx-auto p-10 px-1 rounded-lg">
            <div className="flex flex-col py-2">
              <label htmlFor="email">Name</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="name"
                type="text"
                value={items.name}
                onChange={(e)=>{setItems({...items,name:e.target.value})}} 
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Description</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="desc"
                type="text"
                value={items.desc}
                onChange={(e)=>{setItems({...items,desc:e.target.value})}} 
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Category</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="category"
                type="text"
                value={items.category}
                onChange={(e)=>{setItems({...items,category:e.target.value})}} 
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Date of Expense</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="dateofexpense"
                type="date"
                value={items.dateofexpense}
                onChange={(e)=>{setItems({...items,dateofexpense:e.target.value})}} 
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Expense Amount</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="expenseamount"
                type="text"
                value={items.expenseamount}
                onChange={(e)=>{setItems({...items,expenseamount:e.target.value})}} 
              />
            </div>
          </form>
        </div>
        <div className="footer flex justify-between">
          <button
            onClick={() => {closeModal(false);}}
            className="bg-green-600 rounded-md p-2 m-2 text-white"
          >
            Cancel
          </button>
          <button className="bg-green-600 rounded-md p-2 m-2 text-white" onClick={()=>{
            items.updatedat = new Date().toLocaleString() 
            items.createdby = localStorage.getItem("email")
            items.id = Math.floor(Math.random() * 1000000000)
            addItem(items)
          }}   
          >Create Expense</button>
        </div>
      </div>
    </div>
  );
};

export default CreateExpense;

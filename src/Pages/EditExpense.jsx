import React from "react";

const EditExpense = ({ closeModal }) => {


  return (
    <div className="modalBackground bg-slate-300 flex justify-center align-middle py-10 absolute w-full h-full top-0">
      <div className="modalContainer w-4/12 h-6/12 bg-white shadow-black flex justify-start flex-col p-4">
        <div className="titleClosebtn flex justify-end">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title flex font-extrabold text-lg">
          <h1>Edit Expense</h1>
        </div>
        <div className="body flex justify-start">
          <form className="max-w-[400px] w-full mx-auto p-10 px-1 rounded-lg">
            <div className="flex flex-col py-2">
              <label htmlFor="email">Name</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="name"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Description</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="desc"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Category</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="desc"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Date of Expense</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="desc"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Expense Amount</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="desc"
                type="text"
              />
            </div>
          </form>
        </div>
        <div className="footer flex justify-between">
          <button
            onClick={() => closeModal(false)}
            className="bg-green-600 rounded-md p-2 m-1 text-white"
          >
            Cancel
          </button>
          <button className="bg-green-600 rounded-md p-2 m-1 text-white"
            onClick={()=>{
              closeModal(false);
             }}   
          >Edit Expense</button>
        </div>
      </div>
    </div>
  );
};

export default EditExpense;

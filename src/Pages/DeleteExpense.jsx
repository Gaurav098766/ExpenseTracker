import React from "react";
const DeleteExpense = ({ closeModal }) => {



  return (
    <div className="modalBackground bg-slate-300 flex justify-center align-middle py-10 absolute w-full h-full top-0">
      <div className="modalContainer w-4/12 h-48 bg-white shadow-black flex justify-start flex-col p-8 mt-52">
        <div className="titleClosebtn flex justify-end">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title flex font-extrabold text-lg">
          <h1>Are you sure you want to delete this Expense?</h1>
        </div>
        <div className="footer flex justify-end ml-">
          <button
            onClick={() => closeModal(false)}
            className="bg-red-600 rounded-md mt-12 m-4 p-4 text-white"
          >
            No
          </button>
          <button className="bg-green-600 rounded-md mt-12 m-4 p-4 text-white"
            onClick={()=>{
              closeModal(false);
             }}   
          >Yes, Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteExpense;

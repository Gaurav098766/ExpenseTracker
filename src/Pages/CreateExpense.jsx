import React,{useState} from "react";

const CreateExpense = ({ closeModal }) => {


    //for adding data, createExpense Parameters
    const [inputnamedata,setinputnamedata] = useState("");
    const [inputdescdata,setinputdescdata] = useState("");
    const [inputcategorydata,setinputcategorydata] = useState("");
    const [inputdateofexpensedata,setinputdateofexpensedata] = useState("");
    const [inputexpenseamountdata,setinputexpenseamountdata] = useState("");

    // adding items to the list
    const [items,setItems] = useState([]);

    const addItem = () => {
        // if any field is missing then data will not be added
        if(!inputnamedata || !inputdescdata || !inputcategorydata || !inputdateofexpensedata || !inputexpenseamountdata){}
        else{
          setItems([...items,{  
            name: inputnamedata, 
            desc: inputdescdata, 
            category: inputcategorydata, 
            dateofexpense: inputdateofexpensedata, 
            expenseamount: inputexpenseamountdata
          }])
          setinputnamedata("");
          setinputdescdata("");
          setinputcategorydata("");
          setinputexpenseamountdata("");
          setinputdateofexpensedata("");
        }
    } 

    

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
                value={inputnamedata}
                onChange={(e)=>{setinputnamedata(e.target.value)}} 
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Description</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="desc"
                type="text"
                value={inputdescdata}
                onChange={(e)=>{setinputdescdata(e.target.value)}} 
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Category</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="category"
                type="text"
                value={inputcategorydata}
                onChange={(e)=>{setinputcategorydata(e.target.value)}} 
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Date of Expense</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="dateofexpense"
                type="text"
                value={inputdateofexpensedata}
                onChange={(e)=>{setinputdateofexpensedata(e.target.value)}} 
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Expense Amount</label>
              <input
                className="rounded-lg mt-2 p-2 bg-slate-200"
                id="expenseamount"
                type="text"
                value={inputexpenseamountdata}
                onChange={(e)=>{setinputexpenseamountdata(e.target.value)}} 
              />
            </div>
          </form>
        </div>
        <div className="footer flex justify-between">
          <button
            onClick={() => {closeModal(false);inputnamedata()}}
            className="bg-green-600 rounded-md p-2 m-2 text-white"
          >
            Cancel
          </button>
          <button className="bg-green-600 rounded-md p-2 m-2 text-white" onClick={()=>{addItem()}}   
          >Create Expense</button>
        </div>
      </div>
    </div>
  );
};

export default CreateExpense;

import React,{useState} from 'react'
import DataTable from 'react-data-table-component';
import {MdModeEditOutline} from 'react-icons/md'
import {RiDeleteBin6Line} from 'react-icons/ri'
import '../index.css'
const ViewExpense = () => {
    
    const column = [
        {
            name:'Name',
            selector: row=> row.Name,
        },
        {
            name:'Category',
            selector: row=> row.Category,
        },
        {
            name:'DateofExpense',
            selector: row=> row.DateofExpense,
        },
        {
            name:'Amount',
            selector: row=> row.Amount,
        },
        {
            name:'Updatedat',
            selector: row=> row.Updatedat,
        },
        {
            name:'Createdby',
            selector: row=> row.Createdby
        },
        {
            name:'Action',
            selector: row=>row.Action
        }
    ]
    
    const data = 
    [{
        id:1,
        Name: "Purchased Book",
        Category: "Books",
        DateofExpense: "27 Febuary, 2023",
        Amount: "INR 500",
        Updatedat: "Just now",
        Createdby: "Smith M",
        Action:[
            <div className='action-icons'>
                <MdModeEditOutline/>
                <RiDeleteBin6Line style={{color:"red"}}/>
            </div>
        ]
    }, {
        id:2,
        Name: "CBC Test",
        Category: "Health",
        DateofExpense: "27 Febuary, 2023",
        Amount: "INR 1,500",
        Updatedat: "7 hours ago",
        Createdby: "Jacob Jo",
        Action:[
            <div className='action-icons'>
            <MdModeEditOutline/>
            <RiDeleteBin6Line style={{color:"red"}}/>
        </div>
        ]
    }, {
        id:3,
        Name: "Boat Earphone",
        Category: "Electronics",
        DateofExpense: "24 Febuary, 2023",
        Amount: "INR 1,000",
        Updatedat: "7 hours ago",
        Createdby: "me",
        Action:[
            <div className='action-icons'>
                <MdModeEditOutline/>
                <RiDeleteBin6Line style={{color:"red"}}/>
            </div>
        ]
    }, {
        id:3,
        Name: "Delhi Flight",
        Category: "Travel",
        DateofExpense: "23 Febuary, 2023",
        Amount: "INR 5000",
        Updatedat: "15 hour ago",
        Createdby: "John D",
        Action:[
            <div className='action-icons'>
            <MdModeEditOutline/>
            <RiDeleteBin6Line style={{color:"red"}}/>
        </div>
        ]
    }, {
        id:4,
        Name: "Bangalore Flight",
        Category: "Travel",
        DateofExpense: "22 Febuary, 2023",
        Amount: "INR 1,800",
        Updatedat: "1 hous ago",
        Createdby: "John D",
        Action:[
            <div className='action-icons'>
            <MdModeEditOutline/>
            <RiDeleteBin6Line style={{color:"red"}}/>
        </div>
        ]
    }, {
        id:5,
        Name: "Fees",
        Category: "Education",
        DateofExpense: "21 Febuary, 2023",
        Amount: "INR 1,800",
        Updatedat: "1 hour ago",
        Createdby: "me",
        Action:[
            <div className='action-icons'>
            <MdModeEditOutline/>
            <RiDeleteBin6Line style={{color:"red"}}/>
        </div>
        ]
    },
    , {
        id:6,
        Name: "Fees",
        Category: "Education",
        DateofExpense: "21 Febuary, 2022",
        Amount: "INR 1,800",
        Updatedat: "1 hour ago",
        Createdby: "me",
        Action:[
            <div className='action-icons'>
            <MdModeEditOutline/>
            <RiDeleteBin6Line style={{color:"red"}}/>
        </div>
        ]
      },
      , {
          id:7,
          Name: "Fees",
          Category: "Education",
          DateofExpense: "21 Febuary, 2023",
          Amount: "INR 1,800",
          Updatedat: "1 hour ago",
          Createdby: "me",
          Action:[
            <div className='action-icons'>
            <MdModeEditOutline/>
            <RiDeleteBin6Line style={{color:"red"}}/>
        </div>
        ]
        },
        , {
            id:8,
            Name: "Fees",
            Category: "Education",
            DateofExpense: "21 Febuary, 2023",
            Amount: "INR 1,800",
            Updatedat: "1 hour ago",
            Createdby: "me",
            Action:[
                <div className='action-icons'>
                <MdModeEditOutline/>
                <RiDeleteBin6Line style={{color:"red"}}/>
            </div>
            ]
        },
        , {
            id:9,
            Name: "Fees",
            Category: "Education",
            DateofExpense: "21 Febuary, 2023",
            Amount: "INR 1,800",
            Updatedat: "1 hour ago",
            Createdby: "me",
            Action:[
                <div className='action-icons'>
                <MdModeEditOutline/>
                <RiDeleteBin6Line style={{color:"red"}}/>
            </div>
        ]
        },
    ]

    const [searchQuery, setSearchQuery] = useState(data);


// for handling search by name
const handleSearchFilter = (e) => {
    const query = e.target.value;
    const updatedList = data.filter((item)=>{
        return item.Name.toLowerCase().includes(query.toLowerCase())
    })
    setSearchQuery(updatedList);
};


// for handling search by dateofExpense
const handledateFilter = (e) => {
    const query = e.target.value;
    const updatedList = data.filter((item)=>{
        return item.DateofExpense.toLowerCase().includes(query.toLowerCase())
    })
    setSearchQuery(updatedList);
};


    return (
        <div className='m-20'>
        <div className='m-10 flex justify-between'>
            <div className='text-lg font-extrabold'>
                <h1>MY EXPENSE MANAGER</h1>
            </div>
            <div className='flex justify-between w-5/12'>
                <div className='w-10'>
                    <input
                    className='border-2 border-black'
                    type="text"
                    placeholder="Filter by Date of Expense"
                    onChange={handledateFilter}
                    />
                </div>
                <div className='w-10'>
                    <input
                    className='border-2 border-black'
                    type="text"
                    placeholder="Search Expense by Name"
                    onChange={handleSearchFilter}
                    />
                </div>
                <div>
                    <button className='border-2 border-black bg-green-600 text-white'>+ New Expense</button>
                </div>
            </div>
        </div>

        <div className='mt-5'>

            <DataTable
                columns={column}
                data={searchQuery}
                selectableRows
                fixed
                pagination
            />
        </div>
    </div>
  )
}

export default ViewExpense



// i am not able to do filter by seachbyname tell me what i am doing wrong
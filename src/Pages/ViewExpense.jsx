import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../index.css";
import CreateExpense from "./CreateExpense";
import DeleteExpense from "./DeleteExpense";
import EditExpense from "./EditExpense";

const ViewExpense = () => {
  // For modal popup
  const [createmodal, setcreateModal] = useState(false);
  const [editmodal, seteditModal] = useState(false);
  const [deleteemodal, setdeleteModal] = useState(false);


  const data = [
    {
      id: 1,
      Name: "Purchased Book",
      Category: "Books",
      DateofExpense: "27 Febuary, 2023",
      Amount: "INR 500",
      UpdatedAt: "Just now",
      CreatedBy: "Smith M",
      Action: []
    },
    {
      id: 2,
      Name: "CBC Test",
      Category: "Health",
      DateofExpense: "27 Febuary, 2023",
      Amount: "INR 1,500",
      UpdatedAt: "7 hours ago",
      CreatedBy: "Jacob Jo",
    },
    {
      id: 3,
      Name: "Boat Earphone",
      Category: "Electronics",
      DateofExpense: "24 Febuary, 2023",
      Amount: "INR 1,000",
      UpdatedAt: "7 hours ago",
      CreatedBy: "me",
    },
    {
      id: 3,
      Name: "Delhi Flight",
      Category: "Travel",
      DateofExpense: "23 Febuary, 2023",
      Amount: "INR 5000",
      UpdatedAt: "15 hour ago",
      CreatedBy: "John D",
    },
    {
      id: 4,
      Name: "Bangalore Flight",
      Category: "Travel",
      DateofExpense: "22 Febuary, 2023",
      Amount: "INR 1,800",
      UpdatedAt: "1 hous ago",
      CreatedBy: "John D",
    },
    {
      id: 5,
      Name: "Fees",
      Category: "Education",
      DateofExpense: "21 Febuary, 2023",
      Amount: "INR 1,800",
      UpdatedAt: "1 hour ago",
      CreatedBy: "me",
    },
    ,
    {
      id: 6,
      Name: "Fees",
      Category: "Education",
      DateofExpense: "21 Febuary, 2022",
      Amount: "INR 1,800",
      UpdatedAt: "1 hour ago",
      CreatedBy: "me",
    }
    // ,
    // {
    //   id: 7,
    //   Name: "Fees",
    //   Category: "Education",
    //   DateofExpense: "21 Febuary, 2023",
    //   Amount: "INR 1,800",
    //   UpdatedAt: "1 hour ago",
    //   CreatedBy: "me",
    // },
    // {
    //   id: 8,
    //   Name: "Fees",
    //   Category: "Education",
    //   DateofExpense: "21 Febuary, 2023",
    //   Amount: "INR 1,800",
    //   UpdatedAt: "1 hour ago",
    //   CreatedBy: "me",
    // },
    // {
    //   id: 9,
    //   Name: "Fees",
    //   Category: "Education",
    //   DateofExpense: "21 Febuary, 2023",
    //   Amount: "INR 1,800",
    //   UpdatedAt: "1 hour ago",
    //   CreatedBy: "me",
    // }
  ];



  // For searching by filter purpose
  const [searchQuery, setSearchQuery] = useState(data);


  // for handling search by name
  const handleSearchFilter = (e) => {
    const query = e.target.value;
    const updatedList = data.filter((item) => {
      return item.Name.toLowerCase().includes(query.toLowerCase());
    });
    setSearchQuery(updatedList);
  };

  // for handling search by dateofExpense
  const handledateFilter = (e) => {
    const query = e.target.value;
    const updatedList = data.filter((item) => {
      return item.DateofExpense.toLowerCase().includes(query.toLowerCase());
    });
    setSearchQuery(updatedList);
  };


  return (
    <div className="w-full h-full overflow-y-auto" id="viewExpense">
      <div className="m-2 border-2 border-gray-500 rounded-3xl">
        <div className="m-6 flex justify-between">
          <div className="text-lg font-extrabold">
            <h1>MY EXPENSE MANAGER</h1>
          </div>
          <div className="flex justify-between w-5/12 gap-4">
            <div className="w-10">
              <input
                className="border-2 border-black p-2"
                type="text"
                placeholder="Filter by Date of Expense"
                onChange={handledateFilter}
              />
            </div>
            <div className="w-10">
              <input
                className="border-2 border-black p-2"
                type="text"
                placeholder="Search Expense by Name"
                onChange={handleSearchFilter}
              />
            </div>
            <div>
              <button
                className="border-2 border-black bg-green-600 text-white p-2 openModalbtn"
                onClick={() => {
                  setcreateModal(true);
                }}
              >
                + New Expense
              </button>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div class="relative shadow-md sm:rounded-lg tableexpense">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Date of Expense
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Updated At
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Created by
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchQuery.map((row) => {
                  return (
                    <>
                      <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="px-6 py-4">{row.Name}</td>
                        <td class="px-6 py-4">{row.Category}</td>
                        <td class="px-6 py-4">{row.DateofExpense}</td>
                        <td class="px-6 py-4">{row.Amount}</td>
                        <td class="px-6 py-4">{row.UpdatedAt}</td>
                        <td class="px-6 py-4">{row.CreatedBy}</td>
                        <td class="px-6 py-4">
                          <div className="action-icons">
                            <button
                              className="action-icons"
                              onClick={() => {
                                seteditModal(true);
                              }}
                            >
                              <MdModeEditOutline />
                            </button>
                            <button
                              className="action-icons"
                              onClick={() => {
                                setdeleteModal(true);
                              }}
                            >
                              <RiDeleteBin6Line style={{ color: "red" }} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
        </div>
          </div>
      </div>
      {createmodal && <CreateExpense closeModal={setcreateModal} />}
      {editmodal && <EditExpense closeModal={seteditModal} />}
      {deleteemodal && <DeleteExpense closeModal={setdeleteModal} />}
    </div>
  );
};

export default ViewExpense;

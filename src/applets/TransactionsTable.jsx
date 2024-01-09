/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { uid } from "uid";

const randomDate = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

let startDate = new Date("2000-01-01");
let endDate = new Date("2023-01-01");

function TransactionsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [transactions, setTransactions] = useState(
    new Array(20).fill(null).map(() => ({
      id: uid(10),
      orderId: uid(6).toUpperCase(),
      date: randomDate(startDate, endDate).toLocaleString("en-IN"),
      amount: (Math.random() * 10000).toFixed(2),
      fees: (Math.random() * 100).toFixed(2),
    }))
  );

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.orderId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-white rounded-md p-5 flex-grow shadow-3 flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="p-2 flex flex-row items-center">
          <div className="rounded-md border-neutral-200 border text-neutral-400 w-full p-2 text-left flex flex-row">
            <IoIosSearch
              fontSize={25}
              className="mr-3 whitespace-nowrap inline-block"
            />
            <input
              placeholder="Search by order ID..."
              className="bg-transparent outline-none text-sm border-0 flex-grow text-neutral-400"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="space-x-3 flex flex-row justify-end items-center p-2 h-[60px]">
          <div className="p-2 px-4 border border-neutral-200 rounded-md hover:bg-neutral-100 cursor-pointer">
            <span>Sort</span>
            <img src="sort.svg" className="ml-2 inline-block" />
          </div>

          <div className="p-2 px-3 border h-full border-neutral-200 rounded-md flex justify-center items-center hover:bg-neutral-100 cursor-pointer">
            <img src="download.svg" />
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col justify-between space-y-4">
        <div className="flex-grow relative overflow-y-auto">
          <table className="absolute top-0 left-0 w-full">
            <thead className="sticky top-0 h-6 rounded-md text-neutral-500">
              <tr className="border-none w-full overflow-hidden">
                <th className="rounded-s-md bg-[#f2f2f2] font-medium w-1/4">
                  Order ID
                </th>
                <th className="bg-[#f2f2f2] font-medium w-1/4">Order date</th>
                <th className="bg-[#f2f2f2] font-medium w-1/4 text-right">
                  Order amount
                </th>
                <th className="rounded-e-md bg-[#f2f2f2] font-medium flex flex-row space-x-2 justify-end">
                  <span>Transaction&nbsp;fees</span>
                  <img src="info.svg" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-neutral-50 cursor-pointer"
                >
                  <td className="text-[#146eb4]">
                    <span className="hover:border-b border-blue-600 cursor-pointer">
                      #{transaction.orderId}
                    </span>
                  </td>
                  <td className="whitespace-nowrap">{transaction.date}</td>
                  <td className="text-right">₹{transaction.amount}</td>
                  <td className="text-right">₹{transaction.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-row justify-center space-x-4 items-center">
          <div className="p-2 px-4 border whitespace-nowrap border-neutral-200 rounded-md hover:bg-neutral-100 cursor-pointer">
            <TbChevronLeft className="mr-2 inline-block" />
            <span>Previous</span>
          </div>

          {[1, "...", 10, 11, 12, 13, 14, 15, 16, 17, 18].map((i) =>
            i === 10 ? (
              <div
                key={i}
                className="h-8 w-8 flex justify-center text-white bg-[#146eb4] items-center text-sm border border-neutral-200 rounded-md hover:bg-blue-400 duration-200 cursor-pointer"
              >
                {i}
              </div>
            ) : (
              <div
                key={i}
                className="h-8 w-8 flex justify-center items-center text-sm border border-neutral-200 rounded-md hover:bg-neutral-100 cursor-pointer"
              >
                {i}
              </div>
            )
          )}

          <div className="p-2 px-4 whitespace-nowrap border border-neutral-200 rounded-md hover:bg-neutral-100 cursor-pointer">
            <span>Next</span>
            <TbChevronRight className="ml-2 inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionsTable;

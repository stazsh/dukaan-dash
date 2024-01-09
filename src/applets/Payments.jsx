import { Dropdown } from "primereact/dropdown";
import TransactionsTable from "./TransactionsTable";

function Payments() {
  return (
    <div className="flex flex-col space-y-6 flex-grow">
      <div className="flex flex-row justify-between">
        <div className="text-xl font-medium">Overview</div>

        <Dropdown
          value={"Last Month"}
          options={["Last Month", "Last 3 Months"]}
          className="w-48 h-fit border-neutral-200 border text-sm text-left"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="h-32 shadow-3 bg-white p-6 flex flex-col justify-between text-left rounded-md">
          <span className="text-neutral-500">Online Orders</span>
          <span className="font-medium text-4xl">231</span>
        </div>

        <div className="h-32 shadow-3 bg-white p-6 flex flex-col justify-between text-left rounded-md">
          <span className="text-neutral-500">Amount received</span>
          <span className="font-medium text-4xl">₹23,92,312.19</span>
        </div>
      </div>

      <div className="text-xl font-medium text-left">
        Transactions | This month
      </div>

      <TransactionsTable />
    </div>
  );
}

export default Payments;

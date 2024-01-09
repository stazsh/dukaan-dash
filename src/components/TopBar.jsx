import { RiQuestionLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

function TopBar() {
  return (
    <div className="h-[4.5rem] grid px-8 text-black grid-cols-3 bg-white border-b border-b-neutral-200">
      <div className="flex space-x-5 flex-row items-center">
        <div>Payments</div>
        <div className="opacity-70 text-sm flex flex-row items-center">
          <RiQuestionLine fontSize={15} className="mr-0.5 inline-block" />
          How it works
        </div>
      </div>

      <div className="p-2 flex flex-row items-center">
        <div className="rounded-md bg-[#e6e6e67b] text-neutral-400 w-[350px] p-3 text-left flex flex-row">
          <IoIosSearch
            fontSize={25}
            className="mr-3 whitespace-nowrap inline-block"
          />
          <input
            placeholder="Search features, tutorials, etc."
            className="bg-transparent outline-none border-0 flex-grow text-neutral-400"
          />
        </div>
      </div>

      <div className="flex flex-row justify-end items-center space-x-5">
        <div className="w-[50px] h-[50px] rounded-full bg-[#e6e6e6] flex p-4">
          <img src="announce.svg" />
        </div>

        <div className="w-[50px] h-[50px] rounded-full bg-[#e6e6e6] flex p-[1.1rem]">
          <img src="caret-down.svg" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

function BottomletsNavPane() {
  return (
    <div className="rounded-md cursor-pointer p-2 flex flex-row space-x-3 justify-start items-center bg-white bg-opacity-10">
      <img
        src="home.svg"
        className="p-[0.65rem] bg-white bg-opacity-10 rounded-md h-full w-[40px]"
      />

      <div className="flex flex-col justify-between items-start">
        <div className="opacity-80 text-sm">Available credits</div>
        <div className="font-medium">222.10</div>
      </div>
    </div>
  );
}

export default BottomletsNavPane;

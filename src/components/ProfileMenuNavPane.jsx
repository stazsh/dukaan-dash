import { TbChevronDown } from "react-icons/tb";

function ProfileMenuNavPane() {
  return (
    <div className="flex flex-row items-center justify-between p-2 bg-white bg-opacity-0 hover:bg-opacity-20 transition-colors duration-100 cursor-pointer rounded-md">
      <div className="flex flex-row space-x-4">
        <img
          src="./mere-nishyan.jpg"
          className="rounded-md"
          alt="Merchant image"
          width={50}
        />

        <div className="h-full w-fit flex flex-col justify-between">
          <div className="font-medium w-fit">{"Nishyan"}</div>
          <div className="underline opacity-90 w-fit whitespace-nowrap">
            Visit store
          </div>
        </div>
      </div>

      <div>
        <TbChevronDown fontSize={25} />
      </div>
    </div>
  );
}

export default ProfileMenuNavPane;

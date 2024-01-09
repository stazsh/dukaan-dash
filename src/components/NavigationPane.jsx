import BottomletsNavPane from "./BottomletsNavPane";
import ProfileMenuNavPane from "./ProfileMenuNavPane";
import TopletsNavPane from "./TopletsNavPane";

function NavigationPane() {
  return (
    <div className="p-3 text-white w-[250px] min-w-[200px] bg-[#1E2640] justify-between flex flex-col">
      <div className="space-y-2">
        <ProfileMenuNavPane />
        <TopletsNavPane />
      </div>

      <div>
        <BottomletsNavPane />
      </div>
    </div>
  );
}

export default NavigationPane;

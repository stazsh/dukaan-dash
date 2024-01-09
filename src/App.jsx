import "./App.css";
import NavigationPane from "./components/NavigationPane";
import Workspace from "./components/Workspace";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";

function App() {
  return (
    <PrimeReactProvider
      value={{
        appendTo: "self",
        hideOverlaysOnDocumentScrolling: true,
        inputStyle: "filled",
      }}
    >
      <div className="flex flex-row h-[100vh] w-[100vw]">
        <NavigationPane />
        <Workspace />
      </div>
    </PrimeReactProvider>
  );
}

export default App;

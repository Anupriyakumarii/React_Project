import "./App.css";
import { BioProvider } from "./components/hooks/ContectApi/ContectApiDemo";
import Home from "./components/hooks/ContectApi/Home";
// import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
// import HookState from "./components/hooks/HookState";

function App() {
  return (
    <>
      {/* <HookState></HookState> */}
      {/* <ToggleSwitch></ToggleSwitch> */}
      <BioProvider>
        <Home></Home>
      </BioProvider>
    </>
  );
}

export default App;

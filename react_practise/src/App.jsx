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
      {/* For context api we need to wrap component in provider component */}
      <BioProvider>
        <Home></Home>
      </BioProvider>
    </>
  );
}

export default App;

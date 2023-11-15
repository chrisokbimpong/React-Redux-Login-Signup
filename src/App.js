import "./App.css";
import { ReactHookForm } from "./components/HookForm/ReactHookForm";
import { LoginSignup } from "./components/LoginSignup/LoginSignup";

function App() {
  return (
    <>
      <div>{/* <LoginSignup /> */}</div>
      <div>
        <ReactHookForm />
      </div>
    </>
  );
}

export default App;

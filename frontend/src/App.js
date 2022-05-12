// frontend/src/App.js
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login.js"
import Dashboard from "./components/dashboard/Dashboard";
import Root from "./Root"; 

export default function App() {
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <Root>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Root>
);
}
//https://reactrouter.com/docs/en/v6/getting-started/tutorial

import "./App.css";

import { Routes, Route, NavLink } from "react-router-dom";
import Manager from "./components/panels/Manager";
import Supervisor from "./components/panels/Supervisor";
import Owner from "./components/panels/Owner";

function App() {
  return (
    <>
      {/* Routes Links */}
      <div className="LinkDesign">
        <NavLink className="links" to="/">
          Owner
        </NavLink>
        <NavLink className="links" to="/manager">
          manager
        </NavLink>
        <NavLink className="links" to="/supervisor">
          supervisor
        </NavLink>
      </div>
      {/* Routes */}

      <Routes>
        <Route path="/" element={<Owner />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/supervisor" element={<Supervisor />} />
      </Routes>
    </>
  );
}

export default App;

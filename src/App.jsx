import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Sidebar from "./Components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";












function App() {
  const [clickSidebar, setClickSidebar] = useState(false);
  return (
    <div
      style={{
        backgroundRepeat: "no-repeat",
      }}
    >
      {clickSidebar && (
        <Sidebar
          clickSidebar={clickSidebar}
          setClickSidebar={setClickSidebar}
        ></Sidebar>
      )}
      <Navbar
        clickSidebar={clickSidebar}
        setClickSidebar={setClickSidebar}
      ></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;

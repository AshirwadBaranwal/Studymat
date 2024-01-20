import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        backgroundImage: "url(../src/assets/Herobg.jpg)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;

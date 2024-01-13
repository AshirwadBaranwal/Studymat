import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
// import Hero2 from "./Components/Hero2/Hero2";
import Footer from "./Components/Footer/Footer";
// import { useState } from "react";
// import NotesArrayProvider from "./Context/NotesList-Store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        paddingBottom: "50px",
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

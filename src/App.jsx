import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Hero2 from "./Components/Hero2/Hero2";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import NotesArrayProvider from "./Context/NotesList-Store";

function App() {
  return (
    <NotesArrayProvider>
      <Navbar></Navbar>
      <Hero></Hero>
      <Hero2></Hero2>
      <Footer></Footer>
    </NotesArrayProvider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincomp from "./Components/Maincomp/Maincomp.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Subject from "./Pages/Subjects/Subject.jsx";
import NotesArrayProvider from "./Context/NotesList-Store";
import PYQPage from "./Pages/PYQPage/PYQPage.jsx";
import ShowNotes from "./Pages/ShowNotes/ShowNotes.jsx";
import ShowBooks from "./Pages/Books/ShowBooks.jsx";
import Holiday from "./Pages/Holiday.jsx";
import Qbasic from "./Pages/QBASIC/Qbasic.jsx";
import Login from "./Pages/Login/Login.jsx";
import Syllabus from "./Pages/syllabus/Syllabus.jsx";
import Register from "./Pages/registration/Register.jsx";
import Foxpro from "./Pages/Foxpro/Foxpro.jsx";
import CLangQues from "./Pages/Clanguage/CLangQues.jsx";

// import Notes from "./Components/Notes/Notes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Maincomp /> },
      { path: "/About", element: <About /> },
      { path: "/Login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  { path: "/ContactUS", element: <Contact /> },
  { path: "/Subject", element: <Subject /> },
  { path: "/PYQ", element: <PYQPage /> },
  { path: "/ShowNotes/:Subject", element: <ShowNotes /> },
  { path: "/Books", element: <ShowBooks /> },
  { path: "/Holiday", element: <Holiday /> },
  { path: "/Qbasic", element: <Qbasic /> },
  { path: "/Sylllabus", element: <Syllabus /> },
  { path: "/Foxpro", element: <Foxpro /> },
  { path: "/CQuestions", element: <CLangQues /> },

  // { path: "/Notes", element: <Notes /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesArrayProvider>
      <RouterProvider router={router}></RouterProvider>
    </NotesArrayProvider>
  </React.StrictMode>
);

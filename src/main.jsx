import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincomp from "./Components/Maincomp/Maincomp.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import About from "./Pages/About/About.jsx";
import Subject from "./Pages/Subjects/Subject.jsx";
import NotesArrayProvider from "./Context/NotesList-Store";

import ShowNotes from "./Pages/ShowNotes/ShowNotes.jsx";
import ShowBooks from "./Pages/Books/ShowBooks.jsx";
import Holiday from "./Pages/Holiday.jsx";
import Qbasic from "./Pages/QBASIC/Qbasic.jsx";
import Login from "./Pages/Login/Login.jsx";
import Syllabus from "./Pages/syllabus/Syllabus.jsx";
import Register from "./Pages/registration/Register.jsx";
import Spinner from "./Components/Spinner/Spinner.jsx";
import NPYQ from "./Pages/PYQPage/NPYQ.jsx";
import PYQSubject from "./Pages/PYQSubject/PYQSubject.jsx";
import PYQPdfs from "./Pages/PYQPdfs/PYQPdfs.jsx";
// import Foxpro from "./Pages/Foxpro/Foxpro.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Context/AuthContext.jsx";
import Logout from "./Pages/Logout.jsx";

const Foxpro = React.lazy(() => import("./Pages/Foxpro/Foxpro.jsx"));
const CLangQues = React.lazy(() => import("./Pages/Clanguage/CLangQues.jsx"));
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
      { path: "/ContactUS", element: <Contact /> },
    ],
  },
  { path: "/Subject", element: <Subject /> },
  { path: "/PYQ", element: <NPYQ /> },
  { path: "/ShowNotes/:Subject", element: <ShowNotes /> },
  { path: "/Books", element: <ShowBooks /> },
  { path: "/Holiday", element: <Holiday /> },
  { path: "/Qbasic", element: <Qbasic /> },
  { path: "/Sylllabus", element: <Syllabus /> },
  { path: "/PYQ", element: <NPYQ /> },
  { path: "/PYQ/:Part", element: <PYQSubject /> },
  { path: "/PYQ/:Part/:PSubject", element: <PYQPdfs /> },
  { path: "/logout", element: <Logout /> },
  {
    path: "/Foxpro",
    element: (
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <Spinner></Spinner>
          </div>
        }
      >
        <Foxpro />
      </Suspense>
    ),
  },
  {
    path: "/CQuestions",
    element: (
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <Spinner></Spinner>
          </div>
        }
      >
        <CLangQues />
      </Suspense>
    ),
  },

  // { path: "/Notes", element: <Notes /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesArrayProvider>
      <AuthProvider>
        <ToastContainer />
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </NotesArrayProvider>
  </React.StrictMode>
);

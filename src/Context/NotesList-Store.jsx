import { createContext, useEffect, useReducer, useState } from "react";
import { Notelist } from "../Arrays/NotesArray";

export const NotesArray = createContext({
  notesArray: [],
});

const notesArrayReducer = (currNotesArray, action) => {
  return currNotesArray;
};
// Provider****************************
const NotesArrayProvider = ({ children }) => {
  // Reducer***********************************
  const [notesArray, dispatchNotesArray] = useReducer(
    notesArrayReducer,
    Notelist
  );
  // REducer  End ***********************************

  const [semester, setSemester] = useState("Year-1");
  const [darkMode, setDarkMode] = useState(false);
  const [codeLoading, setCodeLoading] = useState("");
  const darkagain = useEffect(() => {
    if (localStorage.getItem("Theme") === "Light") {
      document.body.classList.add("Light");
      document.body.classList.remove("Dark");
    } else if (localStorage.getItem("Theme") === "Dark") {
      document.body.classList.add("Dark");
      document.body.classList.remove("light");
      setDarkMode(!darkMode);
    }
  }, []);

  return (
    <NotesArray.Provider
      value={{
        notesArray,
        semester,
        setSemester,
        darkMode,
        setDarkMode,
        codeLoading,
        setCodeLoading,
      }}
    >
      {children}
    </NotesArray.Provider>
  );
};

export default NotesArrayProvider;

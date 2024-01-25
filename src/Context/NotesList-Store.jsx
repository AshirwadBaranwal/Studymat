import { createContext, useReducer, useState } from "react";
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
  const [theme, setTheme] = useState("Dark");
  return (
    <NotesArray.Provider
      value={{ notesArray, semester, setSemester, theme, setTheme }}
    >
      {children}
    </NotesArray.Provider>
  );
};

export default NotesArrayProvider;

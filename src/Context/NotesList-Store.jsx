import { createContext, useReducer, useState } from "react";

export const NotesArray = createContext({
  notesArray: [],
});

const notesArrayReducer = (currNotesArray, action) => {};
// Provider****************************
const NotesArrayProvider = ({ children }) => {
  // REducer***********************************
  const [notesArray, dispatchNotesArray] = useReducer(notesArrayReducer, []);
  // REducer  End ***********************************

  const [semester, setSemester] = useState("sem-1");
  return (
    <NotesArray.Provider value={{ notesArray, semester, setSemester }}>
      {children}
    </NotesArray.Provider>
  );
};

export default NotesArrayProvider;

import { createContext, useReducer, useState } from "react";

export const NotesArray = createContext({
  notesArray: [],
});

const notesArrayReducer = (currNotesArray, action) => {
  return currNotesArray;
};
// Provider****************************
const NotesArrayProvider = ({ children }) => {
  // REducer***********************************
  const [notesArray, dispatchNotesArray] = useReducer(
    notesArrayReducer,
    Notelist
  );
  // REducer  End ***********************************

  const [semester, setSemester] = useState("sem-1");
  return (
    <NotesArray.Provider value={{ notesArray, semester, setSemester }}>
      {children}
    </NotesArray.Provider>
  );
};

export default NotesArrayProvider;

const Notelist = [
  // practical Starts(1)************************************************
  {
    Sem: 1,
    Subj: "Practical",
    Logo: "" ,
    Chapters: [
      {
        Ch_Name: "UNIX",
        URL: "#",
      },
      { Ch_Name: "Windows operating system", URL: "#" },
      {
        Ch_Name: "MS Word",
        URL: "#",
      },
      {
        Ch_Name: "MS Excel",
        URL: "#",
      },
    ],
    URL: "https://drive.google.com/file/d/1hnkv3VktsxjPXCv7mTkx4m8nsnOnGFIq/view?usp=sharing",
  },
  {
    Sem: 1,
    Subj: "Computer Fundamental",
    Logo: "" ,
    Chapters: [
      {
        Ch_Name: "UNIX",
        URL: "#",
      },
      { Ch_Name: "Windows operating system", URL: "#" },
      {
        Ch_Name: "MS Word",
        URL: "#",
      },
      {
        Ch_Name: "MS Excel",
        URL: "#",
      },
    ],
    URL: "https://drive.google.com/file/d/1hnkv3VktsxjPXCv7mTkx4m8nsnOnGFIq/view?usp=sharing",
  },
  {
    Sem: 1,
    Subj: "English",
    Logo: "" ,
    Chapters: [
      {
        Ch_Name: "UNIX",
        URL: "#",
      },
      { Ch_Name: "Windows operating system", URL: "#" },
      {
        Ch_Name: "MS Word",
        URL: "#",
      },
      
    ],
    URL: "https://drive.google.com/file/d/1hnkv3VktsxjPXCv7mTkx4m8nsnOnGFIq/view?usp=sharing",
  },
  {
    Sem: 1,
    Subj: "Hindi",
    Logo: "" ,
    Chapters: [
      {
        Ch_Name: "UNIX",
        URL: "#",
      },
      { Ch_Name: "Windows operating system", URL: "#" },
      {
        Ch_Name: "MS Word",
        URL: "#",
      },
      {
        Ch_Name: "MS Excel",
        URL: "#",
      },
    ],
    URL: "https://drive.google.com/file/d/1hnkv3VktsxjPXCv7mTkx4m8nsnOnGFIq/view?usp=sharing",
  },
  {
    Sem: 1,
    Subj: "Math",
    Logo: "" ,
    Chapters: [
      {
        Ch_Name: "UNIX",
        URL: "#",
      },
      { Ch_Name: "Windows operating system", URL: "#" },
      {
        Ch_Name: "MS Word",
        URL: "#",
      },
      {
        Ch_Name: "MS Excel",
        URL: "#",
      },
    ],
    URL: "https://drive.google.com/file/d/1hnkv3VktsxjPXCv7mTkx4m8nsnOnGFIq/view?usp=sharing",
  },
];
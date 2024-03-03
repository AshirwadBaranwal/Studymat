import { BookArray } from "./BooksArray";
import { PYQArray } from "./PYQArray";
import { Notelist } from "./NotesArray";
import { QbasicprintArray } from "./Qbasicarray";
const Booknumber = BookArray.length;
const PyqNumber = PYQArray.length;
const Notenumber =
  Notelist[0].Chapters.length +
  Notelist[1].Chapters.length +
  Notelist[2].Chapters.length +
  Notelist[3].Chapters.length +
  Notelist[4].Chapters.length;
const Quesnumber = QbasicprintArray.length;
export const CountArray = [
  {
    title: "Notes",
    numb: Notenumber,
    desc: "Handwritten pdf notes.",
    color: "#fa719d",
  },
  {
    title: "PYQs",
    numb: PyqNumber,
    desc: "PYQs of patliputra university.",
    color: "#a28eff",
  },
  {
    title: "Books",
    numb: Booknumber,
    desc: "Books which are needed in BCA.",
    color: "#66d4f5",
  },
  {
    title: "Ques.",
    numb: Quesnumber,
    desc: "Coding language questions.",
    color: "#feb765",
  },
];

export const PYQArray = [
  {
    id: 1,
    Subj: "Honour Paper-I",
    Year: 2023,
    URL: "https://drive.google.com/file/d/11DuLevCMeexIWFUUEVu4bNwfwbx96zpp/view?usp=sharing",
    Part: "1",
  },
  {
    id: 2,
    Subj: "Honour Paper-II",
    Year: 2023,
    URL: "https://drive.google.com/file/d/11HfglMJAh0_Nlo6TcoFYS4Gv0hqrGadH/view?usp=sharing",
    Part: "1",
  },
  {
    id: 3,
    Subj: " Composition English 50 Marks",
    Year: 2023,
    URL: "https://drive.google.com/file/d/11IfgpkgVJralfQGfDcGX7jaNwdfjTmVO/view?usp=sharing",
    Part: "1",
  },
  {
    id: 4,
    Subj: " Subsidiary English 100 Marks",
    Year: 2023,
    URL: "https://drive.google.com/file/d/11Q7T8XvU-f4CYx3oPkhY0sOUComVnvcy/view?usp=sharing",
    Part: "1",
  },
  {
    id: 5,
    Subj: "Subsidiary Maths 100 Marks",
    Year: 2023,
    URL: "https://drive.google.com/file/d/11TTNCIt3MNmnFwS39q05cv0bRrMhTPrj/view?usp=sharing",
    Part: "1",
  },
  {
    id: 6,
    Subj: "Composition Hindi 50 Marks",
    Year: 2023,
    URL: "https://drive.google.com/file/d/11a0AhgR5tk5uW99wCi5V6dNRHngOBIOx/view?usp=sharing",
    Part: "1",
  },
  {
    id: 7,
    Subj: "Composition Hindi 100 Marks",
    Year: 2023,
    URL: "https://drive.google.com/file/d/11d6BaMOMyc4LvdsOdaU8f6bJfgMrkIu8/view?usp=sharing",
    Part: "1",
  },
  {
    id: 8,
    Subj: "All Subjects",
    Year: 2022,
    URL: "https://drive.google.com/file/d/11eGWXxacAEV4N0X3j67TVjtee76zvinx/view?usp=sharing",
    Part: "2",
  },
  {
    id: 9,
    Subj: "All Subjects",
    Year: 2021,
    URL: "https://drive.google.com/file/d/11gqulRmDuV5xH7zf_amZy0PsEu1t3aw-/view?usp=sharing",
    Part: "1",
  },
  {
    id: 10,
    Subj: "All Subjects",
    Year: 2021,
    URL: "https://drive.google.com/file/d/11g4sPemMje6x0bShqU8VJpmRvH5NW_Ny/view?usp=sharing",
    Part: "3",
  },
  {
    id: 11,
    Subj: "All Subjects",
    Year: 2020,
    URL: "https://drive.google.com/file/d/11kILbKVW6TGN9TLr-wwqV5cDrYBSvQIO/view?usp=sharing",
    Part: "1",
  },
];

const categories = PYQArray.map((P) => P.Year);
export const simplestCategory = [...new Set(categories)];

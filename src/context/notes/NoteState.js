import React from "react";
// import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props) => {
//   const s1 = {
//     name: "Rajan",
//     class: "11-A"
//   };
//   const [state, setState] = useState(s1);
  
//   const update = () => {
//     setTimeout(() => {
//       setState({
//         name: "Aadi",
//         class: "5-B"
//       });
//     }, 1000);
//   };
  return (
    <NoteContext.Provider value={[]}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
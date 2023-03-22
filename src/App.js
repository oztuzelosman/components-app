import Accordion from "./Accordion";
//
import { useState } from "react";
//
function App() {
  const dataItems = [
    {
      id: 0,
      header: "I love React!",
      content: "It increases my developing skills so much",
    },
    {
      id: 1,
      header: "I love Css!",
      content: "It increases my developing skills so much",
    },
    {
      id: 2,
      header: "I love Js!",
      content: "It increases my developing skills so much",
    },
  ];

  return (
    <div>
      <Accordion dataItems={dataItems} />
    </div>
  );
}
export default App;

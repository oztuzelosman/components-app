import { useState } from "react";
//import AccordionPage from "./AccordionPage";
import DropDown from "./DropDown";
//import ButtonPage from "./ButtonPage";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <DropDown
        options={options}
        selection={selection}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default App;

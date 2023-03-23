import DropDown from "./DropDown";
import { useState } from "react";
function App() {
  const [dropVal, setDropVal] = useState(null);

  const getDropValue = (itemVal) => {
    setDropVal(itemVal);
  };

  const dropDownItems = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Yellow",
      value: "yellow",
    },
    {
      label: "Green",
      value: "green",
    },
  ];

  return (
    <div className="flex flex-row m-3 w-15">
      <DropDown
        getDropValue={getDropValue}
        dropVal={dropVal}
        dropDownItems={dropDownItems}
      />
    </div>
  );
}
export default App;

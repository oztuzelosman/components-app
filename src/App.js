import DropDown from "./DropDown";
import { useState } from "react";
function App() {
  const [dropVal, setDropVal] = useState("Select...");

  const getDropValue = (itemVal) => {
    console.log(dropVal);
    setDropVal(itemVal);
  };

  return (
    <div className="flex flex-row m-3 w-15">
      <DropDown getDropValue={getDropValue} dropVal={dropVal} />
    </div>
  );
}
export default App;

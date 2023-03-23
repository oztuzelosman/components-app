import DropDown from "./DropDown";
import { useState } from "react";
function App() {
  const [dropVal, setDropVal] = useState("Select...");

  const getDropValue = (itemVal) => {
    console.log(dropVal);
    setDropVal(itemVal);
  };

  return (
    <div className="m-3">
      <DropDown getDropValue={getDropValue} dropVal={dropVal} />
    </div>
  );
}
export default App;

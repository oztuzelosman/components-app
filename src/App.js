import DropDown from "./DropDown";
import { useState } from "react";
import Panel from "./Panel";
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
    <div className="flex flex-row items-center m-3 w-15">
      <DropDown
        getDropValue={getDropValue}
        dropVal={dropVal}
        dropDownItems={dropDownItems}
      />
      <Panel
        onClick={() => {
          console.log("clicked");
        }}
        className="ml-7"
      >
        Osman
      </Panel>
    </div>
  );
}
export default App;

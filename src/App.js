import DropDown from "./DropDown";
import { useState } from "react";
import Button from "./Button"
//
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
      <Button primary rounded>Osman</Button>
    </div>
  );
}
export default App;


//docker run -e WATCHPACK_POLLING=true -v E:\Coding\components-app\src:/app/src -d -p 3000:3000 --name react-auto-hope cra-react-image

//We can put [-e watchpack] part into .env file 
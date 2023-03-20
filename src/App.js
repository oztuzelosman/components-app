import { useState } from "react";
import dataItems from "./Datas";
//
import { RiArrowDownSFill } from "react-icons/ri";
//
function App() {
  const [expandedIndex, setExpandedIndex] = useState(false);

  const getButtonId = (buttonId) => {
    console.log(buttonId);
    setExpandedIndex(buttonId - 1);
  };

  const renderedItems = dataItems.map((dataItem, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div
        key={dataItem.id}
        className="m-5 p-3 border-2 border-gray-400 rounded-xl"
      >
        <div className="flex flex-row">
          <h3 className="flex-1 text-gray-500">{dataItem.header}</h3>
          <button
            onClick={() => {
              getButtonId(dataItem.id);
            }}
            className=" text-3xl"
          >
            <RiArrowDownSFill />
          </button>
        </div>
        {isExpanded && <p>{dataItem.content}</p>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}
export default App;

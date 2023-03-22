import { useState } from "react";
//
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
//
function Accordion({ dataItems }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const getButtonId = (buttonId) => {
    if (expandedIndex === buttonId) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(buttonId);
    }
    console.log(buttonId);
  };

  const renderedItems = dataItems.map((dataItem, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div
        key={dataItem.id}
        className="m-5 p-3 border-2 border-gray-400 rounded-xl"
        onClick={() => {
          getButtonId(dataItem.id);
        }}
      >
        <div className="flex flex-row">
          <h3 className="flex-1 text-gray-500">{dataItem.header}</h3>
          <button className=" text-2xl">{icon}</button>
        </div>
        {isExpanded && <p>{dataItem.content}</p>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}
export default Accordion;

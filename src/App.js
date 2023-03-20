import { useState } from "react";
import dataItems from "./Datas";
function App() {
  const [expandedIndex, setExpandedIndex] = useState(2);

  const renderedItems = dataItems.map((dataItem, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div className="m-5 p-3 border border-red-400 rounded-xl">
        <h3 className="text-gray-500">{dataItem.header}</h3>
        {isExpanded && <p>{dataItem.content}</p>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}
export default App;

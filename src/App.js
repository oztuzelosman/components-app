import { useState } from "react";

function App() {
  const dataItems = [
    {
      id: 1,
      header: "I love Ramazan Abi!",
      content: "It increases my developing skills so much",
    },
    {
      id: 2,
      header: "I love Css!",
      content: "It increases my developing skills so much",
    },
    {
      id: 3,
      header: "I love Js!",
      content: "It increases my developing skills so much",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(1);

  const renderedItems = dataItems.map((dataItem, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div className="m-5 p-3 border border-red-400 rounded-xl">
        <span>{dataItem.id}</span>
        <h3 className="text-lg">{dataItem.header}</h3>
        {isExpanded && <p>{dataItem.content}</p>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}
export default App;

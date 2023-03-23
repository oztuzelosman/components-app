import { useState } from "react";

function DropDown({ getDropValue, dropVal }) {
  const [toggleShow, setToggleShow] = useState(false);

  const handleShow = () => {
    console.log("select!");
    setToggleShow(() => {
      return !toggleShow;
    });
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

  const itemsList = dropDownItems.map((item) => {
    return (
      <div
        key={item.value}
        onClick={() => {
          getDropValue(item.label);
        }}
      >
        <h3>{item.label}</h3>
      </div>
    );
  });

  return (
    <div className="cursor-pointer">
      <div className="border bg-gray-300 " onClick={handleShow}>
        {dropVal}
      </div>
      {toggleShow && itemsList}
    </div>
  );
}

export default DropDown;

// <div>
//   <h3>Red</h3>
//   <h3>Blue</h3>
//   <h3>Green</h3>
// </div>

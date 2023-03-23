import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
//
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
          setToggleShow();
        }}
      >
        <h3>{item.label}</h3>
      </div>
    );
  });

  return (
    <div className="flex flex-col cursor-pointer">
      <div className="flex justify-between border rounded-xl bg-gray-300 p-1.5">
        <div className="flex-1 " onClick={handleShow}>
          {dropVal}
        </div>
        <button>{toggleShow ? <GoChevronDown /> : <GoChevronLeft />}</button>
      </div>
      <div className="mx-1.5">{toggleShow && itemsList}</div>
    </div>
  );
}

export default DropDown;

// <div>
//   <h3>Red</h3>
//   <h3>Blue</h3>
//   <h3>Green</h3>
// </div>

import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
//
import { useState } from "react";

function DropDown({ getDropValue, dropVal, dropDownItems }) {
  const [toggleShow, setToggleShow] = useState(false);

  const handleShow = () => {
    setToggleShow(() => {
      return !toggleShow;
    });
  };

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

  let content = "Select...";
  if (dropVal) {
    content = dropVal;
  }

  return (
    <div className="flex flex-col cursor-pointer">
      <div className="flex justify-between border rounded-xl bg-gray-300 p-1.5">
        <div className="flex-1 " onClick={handleShow}>
          {content}
          <button>{toggleShow ? <GoChevronDown /> : <GoChevronLeft />}</button>
        </div>
      </div>
      <div className="mx-1.5">{toggleShow && itemsList}</div>
    </div>
  );
}

export default DropDown;

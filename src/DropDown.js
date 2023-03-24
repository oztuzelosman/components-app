import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
//
import { useState, useEffect, useRef } from "react";
//
import Panel from "./Panel";
//
function DropDown({ getDropValue, dropVal, dropDownItems }) {
  const [toggleShow, setToggleShow] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const alienHandler = (event) => {
      if (!divEl.current.contains(event.target)) {
        setToggleShow(false);
      }
    };

    return () => {
      document.removeEventListener("click", alienHandler);
    };

    document.addEventListener("click", alienHandler, true);
  }, []);

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
    <div ref={divEl} className="w-48 relative ">
      <div>
        <Panel
          className="flex justify-between items-center "
          onClick={handleShow}
        >
          {content}
          <button>{toggleShow ? <GoChevronDown /> : <GoChevronLeft />}</button>
        </Panel>
      </div>
      {toggleShow && (
        <Panel className="absolute top-full cursor-pointer">{itemsList}</Panel>
      )}
    </div>
  );
}

export default DropDown;

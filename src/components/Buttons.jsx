import React from "react";

function Buttons({onButtonClick}) {
    let buttonName = [
        "C",
        "+",
        "-",
        "*",
        "1",
        "2",
        "3",
        "/",
        "4",
        "5",
        "6",
        ".",
        "7",
        "8",
        "9",
        "0",
        "=",
      ];

  return (
    <>
      {buttonName.map((item, index) => (
        <button className="btn btn-dark m-2 col-2 col-sm-2" onClick={()=>onButtonClick(item)} key={index}>
          {item}
  
        </button>
      ))}
    </>
  );
}

export default Buttons;

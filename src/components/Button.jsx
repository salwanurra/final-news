import React from "react";

function Button({ text, click, prop, value }) {
  return (
    <>
      <button value={value} onClick={click} type="submit" className={prop}>
        {text}
      </button>
    </>
  );
}

export default Button;

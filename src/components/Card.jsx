import React from "react";

function Card({ text, click, prop, value }) {
  return (
    <div className="p-4 rounded-md border border-2">
      <img src="logo192.png" alt="" className="rounded-md" />
      <h2 className="text-blue">Template</h2>
    </div>
    
    );
}

export default Card;

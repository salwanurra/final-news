import React from "react";

function Card({ saveText, saveClick, image, title, desc, source, detail }) {
  return (
    <div className="p-4 rounded-md border border-2 ">
      <img
        src={image|| "/news.jpg"}
        alt=""
        className="rounded-md h-60 w-full object-cover"
      />
      <h3 className="text-blue font-bold my-3 line-clamp-1">{title}</h3>
      <div className="h-28">
        <p className="text-light-grey line-clamp-4">
          {desc || title}
        </p>
      </div>
      <hr className="my-4 border-zinc-400" />
      <div className="flex justify-between items-center">
        <p className="text-light-grey font-medium">{source}</p>
        <div className="space-x-2 flex">
          <a href={detail}>
            <button className="rounded-md bg-blue text-white text-[14px] font-medium px-1 py-2  ">
              Read More
            </button>
          </a>
          <div>
            <button
              onClick={saveClick}
              className="rounded-md bg-blue text-white text-[14px]  font-medium px-1 py-2  "
            >
              {saveText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

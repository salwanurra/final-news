import React from "react";

function Card({ saveText, saveClick, image, title, desc, source, detail }) {
  return (
    <div className="p-4 rounded-md border border-2">
      <img
        src={image|| "/news.jpg"}
        alt=""
        className="rounded-md h-44 w-full object-cover"
      />
      <h3 className="text-blue text-sm md:text-base lg:text-xl font-bold my-3 line-clamp-1">{title}</h3>
      <div className="h-18">
        <p className="text-light-grey text-xs lg:text-sm line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
          {desc || title}
        </p>
      </div>
      <hr className="my-4 border-zinc-400" />
      <div className="flex justify-between items-center">
        <p className="text-light-grey font-medium">{source}</p>
        <div className="space-x-2 flex">
          <a href={detail}>
            <button className="rounded-md bg-blue text-white text-xs lg:text-sm font-medium p-2">
              Read More
            </button>
          </a>
          <div>
            <button
              onClick={saveClick}
              className="rounded-md bg-blue text-white text-xs lg:text-sm font-medium p-2"
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

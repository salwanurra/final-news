import React from "react";

function Card({ saveText, saveClick, image, title, desc, source, detail, toggle }) {
  return (
    <div className="p-4 rounded-md border border-2">
      <img
        src={image || "/news.jpg"}
        alt=""
        className="rounded-md h-44 w-full object-cover"
      />
<<<<<<< HEAD
      <h3 className="text-blue text-sm md:text-base lg:text-lg font-bold my-3 line-clamp-1">{title}</h3>
      <div className="h-14 md:h-20 lg:h-28 relative">
        <p className="text-light-grey text-xs lg:text-sm line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
          {desc || title}
        </p>
        <p className="text-light-grey font-medium absolute -bottom-2.5 right-0 text-sm">{source}</p>
      </div>
      <hr className="my-4 border-zinc-400" />
      <div className="flex justify-end items-center">
=======
      <h3 className="text-blue text-sm md:text-base lg:text-lg font-bold my-3 line-clamp-1">
        {title}
      </h3>
      <div className="h-8 md:h-12 lg:h-24 relative">
        <p className="text-light-grey text-xs lg:text-sm line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
          {desc || title}
        </p>
        <p className="text-light-grey font-medium relative top-24">{source}</p>
      </div>
      <hr className="my-4 border-zinc-400" />
      <div className="flex justify-between items-center">
>>>>>>> 76c1866561f3184f9bca0628cd5bde8a75750a28
        <div className="space-x-2 flex">
          <div>
            <button
              onClick={saveClick}
              className="rounded-md bg-blue hover:bg-[#1b9dbd] text-white text-xs lg:text-sm font-medium p-2"
            >
              {toggle}
            </button>
          </div>
          <a href={detail}>
            <button className="flex items-center rounded-md bg-blue hover:bg-[#1b9dbd] text-white text-xs lg:text-sm font-medium p-2">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-5 h-5 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

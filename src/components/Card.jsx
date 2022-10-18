import React from "react";
import Button from "./Button";

function Card({ value }) {
  return (
    <div className="p-4 rounded-md border border-2">
      <img src={value.urlToImage || '/news.jpg'} alt="" className="rounded-md h-60 md:h-48 w-full object-cover" />
      <h3 className="text-blue font-bold my-3 line-clamp-2 md:text-[16px]">{value.title}</h3>
      <div className="h-28 md:h-20">
        <p className="text-light-grey line-clamp-4 md:text-[12px]">{value.description || value.title}</p>
      </div>
      <hr className="my-4 border-zinc-400" />
      <div className="flex justify-between items-center">
        <p className="text-light-grey font-medium md:text-[12px]">{value.source?.name}</p>
        <a href={value.url}>
          <Button prop="rounded-md bg-blue text-white text-[12px] font-medium p-2" text="News Page" />
        </a>
      </div>
    </div>
    
    );
}

export default Card;

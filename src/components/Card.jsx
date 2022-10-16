import React from "react";

function Card({ value }) {
  return (
    <div className="p-4 rounded-md border border-2 ">
      <img src={value.urlToImage || '/news.jpg'} alt="" className="rounded-md h-60 w-full object-cover" />
      <h3 className="text-blue font-bold my-3 line-clamp-1">{value.title}</h3>
      <div className="h-28">
        <p className="text-light-grey line-clamp-4">{value.description || value.title}</p>
      </div>
      <hr className="my-4 border-zinc-400" />
      <div className="flex justify-between items-center">
        <p className="text-light-grey font-medium">{value.source?.name}</p>
        <a href={value.url}>
          <button className="rounded-md bg-blue text-white text-[14px] font-medium p-3">Read More</button>
        </a>
      </div>
    </div>
    
    );
}

export default Card;

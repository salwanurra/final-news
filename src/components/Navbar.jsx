import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";



function Navbar({ NavProp }) {
  const location = useLocation();
  const [path, setPath] = useState(null);



  useEffect(() => {

    setPath(location.pathname);

  }, [location]);


  return (
    <>
      <nav className={NavProp}>
        <NavLink
          exact={true}
          to={"/"}
          className={
            path === "/" 
              ? "text-white m740:text-sm m640:text-xs border-b-2 border-white py-1 "
              : "text-white m740:text-sm m640:text-xs"
          }
        >
          Indonesia
        </NavLink>
    
        <NavLink
          to={"/programming"}
          className={
            path === "/programming"
              ? "text-white m740:text-sm m640:text-xs border-b-2 border-white py-1 "
              : "text-white m740:text-sm m640:text-xs"
          }
        >
          Programming
        </NavLink>
        <NavLink
          to={"/covid"}
          className={
            path === "/covid"
              ? "text-white m740:text-sm m640:text-xs border-b-2 border-white py-1 whitespace-nowrap"
              : "text-white m740:text-sm m640:text-xs whitespace-nowrap"
          }
        >
          COVID-19
        </NavLink>
        <NavLink
          to={"/saved"}
          className={
            path === "/saved"
              ? "text-white m740:text-sm m640:text-xs border-b-2 border-white py-1"
              : "text-white m740:text-sm m640:text-xs"
          }
        >
          Saved
        </NavLink>
        <div className="search">
          <form action="/search" method="GET">
            <input
              className="m1024:ml-28 m640:text-xxs m1280:ml-64 m740:text-xxs m640:w-16 m910:ml-16 m740:ml-8 px-1 mt-1 text-xs rounded-sm m740:w-16 w-28 h-6 ml-28 text-xs"
              placeholder="Search.."
              name="search"
              type="search"
            />
            <Button
    
              text="Cari Berita"
              prop="text-sm  m740:w-20 m740:text-xxs m640:w-16 m640:text-xxs whitespace-nowrap    mx-2 text-black w-20 h-6 mt-1  bg-news-yellow align-right absolute text-xsm"
            />
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";




function Navbar() {
  const location = useLocation();
  const [path, setPath] = useState(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {

    setPath(location.pathname);

  }, [location]);

  return (
    <>
    
      <div className="flex p-3 justify-between md:justify-around items-center w-11/12 md:w-full mx-auto">
        {/* mobile */}
        <div className="block md:hidden">
          <button onClick={() => setShowNav(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* laptop */}
        <div className="hidden md:block">
        
          <NavLink
            exact={true}
            to={"/"}
            className={
              path === "/" 
                ? "text-white text-xs md:text-base mr-4 border-b-2 border-white py-1 "
                : "text-white text-xs md:text-base mr-4"
            }
          >
            Indonesia
          </NavLink>
      
          <NavLink
            to={"/programming"}
            className={
              path === "/programming"
                ? "text-white text-xs md:text-base mr-4 border-b-2 border-white py-1 "
                : "text-white text-xs md:text-base mr-4"
            }
          >
            Programming
          </NavLink>
          <NavLink
            to={"/covid"}
            className={
              path === "/covid"
                ? "text-white text-xs md:text-base mr-4 border-b-2 border-white py-1 whitespace-nowrap"
                : "text-white text-xs md:text-base mr-4 whitespace-nowrap"
            }
          >
            COVID-19
          </NavLink>
          <NavLink
            to={"/saved"}
            className={
              path === "/saved"
                ? "text-white text-xs md:text-base mr-4 border-b-2 border-white py-1"
                : "text-white text-xs md:text-base mr-4"
            }
          >
            Saved
          </NavLink>
        </div>
        <div className="search">
          <form action="/search" method="GET">
            <div className="relative">
              <input
                className="p-1 px-6 !text-white rounded-full !bg-slate-700 border !border-white w-full md:w-[300px]"
                placeholder="Search..."
                name="search"
                type="search"
                autoComplete="off"
              />
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4 absolute right-6 bottom-1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {showNav && (
        <div className="flex flex-col fixed top-4 left-2 w-full max-w-[18rem] sm:max-w-xs bg-slate-700 rounded-lg shadow-lg p-6">
          <button className="absolute top-5 right-5" onClick={() => setShowNav(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        <NavLink
          exact={true}
          to={"/"}
          className={
            path === "/" 
              ? "text-white text-sm md:text-base mr-4 text-sky-400 py-1 "
              : "text-white text-sm md:text-base mr-4"
          }
          onClick={() => setShowNav(false)}
        >
          Indonesia
        </NavLink>
    
        <NavLink
          to={"/programming"}
          className={
            path === "/programming"
              ? "text-white text-sm md:text-base mr-4 mt-4 text-sky-400 py-1 "
              : "text-white text-sm md:text-base mr-4 mt-4"
          }
          onClick={() => setShowNav(false)}
        >
          Programming
        </NavLink>
        <NavLink
          to={"/covid"}
          className={
            path === "/covid"
              ? "text-white text-sm md:text-base mr-4 mt-4 text-sky-400 py-1 whitespace-nowrap"
              : "text-white text-sm md:text-base mr-4 mt-4 whitespace-nowrap"
          }
          onClick={() => setShowNav(false)}
        >
          COVID-19
        </NavLink>
        <NavLink
          to={"/saved"}
          className={
            path === "/saved"
              ? "text-white text-sm md:text-base mr-4 mt-4 text-sky-400 py-1"
              : "text-white text-sm md:text-base mr-4 mt-4"
          }
          onClick={() => setShowNav(false)}
        >
          Saved
        </NavLink>
      </div>
      )}
    </>
  );
}

export default Navbar;


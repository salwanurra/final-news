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
          to={"/"}
          className={
            path === "/"
              ? "text-white border-b-2 border-white py-1 "
              : "text-white"
          }
        >
          Indonesia
        </NavLink>
        <NavLink
          to={"/economy"}
          className={
            path === "/economy"
              ? "text-white border-b-2 border-white py-1 "
              : "text-white"
          }
        >
          Economy
        </NavLink>
        <NavLink
          to={"/programming"}
          className={
            path === "/programming"
              ? "text-white border-b-2 border-white py-1 "
              : "text-white"
          }
        >
          Programming
        </NavLink>
        <NavLink
          to={"/covid"}
          className={
            path === "/covid"
              ? "text-white border-b-2 border-white py-1 "
              : "text-white"
          }
        >
          COVID-19
        </NavLink>
        <NavLink
          to={"/saved"}
          className={
            path === "/saved"
              ? "text-white border-b-2 border-white py-1"
              : "text-white"
          }
        >
          Saved
        </NavLink>
        <div className="search">
          <form action="/" method="GET">
            <input
              className="ml-64 px-1 text-xs rounded-sm w-28 h-6"
              placeholder="Search.."
              name="search"
              type="search"
            />
            <Button
              text="Cari Berita"
              prop="text-sm text-black w-20 h-6 bg-news-yellow align-right"
            />
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

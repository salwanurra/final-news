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
          to={"/Economy"}
          className={
            path === "/Economy"
              ? "text-white border-b-2 border-white py-1 "
              : "text-white"
          }
        >
          Economy
        </NavLink>
        <NavLink
          to={"/Programming"}
          className={
            path === "/Programming"
              ? "text-white border-b-2 border-white py-1 "
              : "text-white"
          }
        >
          Programming
        </NavLink>
        <NavLink
          to={"/Covid"}
          className={
            path === "/Covid"
              ? "text-white border-b-2 border-white py-1 "
              : "text-white"
          }
        >
          COVID-19
        </NavLink>
        <NavLink
          to={"/Saved"}
          className={
            path === "/Saved"
              ? "text-white border-b-2 border-white py-1"
              : "text-white"
          }
        >
          Saved
        </NavLink>
        <div className="search">
          <input
            className="ml-64 px-1 text-xs rounded-sm w-28 h-6"
            placeholder="Search.."
          />
        </div>
        <Button
          text="Cari Berita"
          prop="text-sm text-black w-20 h-6 bg-news-yellow align-right"
        />
      </nav>
    </>
  );
}

export default Navbar;

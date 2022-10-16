import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Covid from "../pages/Covid";
import Indonesia from "../pages/Indonesia";
import Programming from "../pages/Programming";
import Saved from "../pages/Saved";

function AnimatedRoutes() {
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/covid" element={<Covid />} />
        <Route exact path="/" element={<Indonesia />} />
        <Route path="/search" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

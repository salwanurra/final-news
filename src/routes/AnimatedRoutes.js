
import React from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Covid from "../pages/Covid";
import Economy from "../pages/Economy";
import Indonesia from "../pages/Indonesia";
import Programming from "../pages/Programming";
import Saved from "../pages/Saved";

function AnimatedRoutes() {
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/Covid" element={<Covid/>} />
        <Route path="/Economy" element={<Economy/>}/>
        <Route path="/" element={<Indonesia/>}/>
        <Route path="/Programming" element={<Programming/>}/>
        <Route path="/Saved" element={<Saved/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

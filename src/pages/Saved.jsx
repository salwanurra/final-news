import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { deleteFromSaved } from "../store/saved/SaveSlice";
function Saved() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.saved.saved);
  const handleUnsave = (title) => {
    dispatch(deleteFromSaved({ title: title }));
  };

  const checkdata = () => {
    const data = JSON.parse(localStorage.getItem("saved"));
    if (data !== null) {
      if (data.length === 0) {
        return (
          <div className=" mt-24 text-2xl text-center ">No News saved yet</div>
        );
      }
    } else {
      return (
        <div className=" mt-24 text-2xl text-center ">No News saved yet</div>
      );
    }
  };

  const listSaved = () => {
    const data = JSON.parse(localStorage.getItem("saved"));
    if (data !== null) {
      if (data.length !== 0) {
        return news.map((item) => (
          <Card
            saveClick={() => handleUnsave(item.title)}
            title={item.title}
            image={item.image}
            source={item.source}
            desc={item.desc}
            detail={item.detail}
            saveText="Unsave"
          />
        ));
      }
    }
  };

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const pageVariants = {
    initial: { scale: 0.2, opacity: 100 },
    in: { scale: 1, opacity: 1, transition: { duration: 0.5, ...transition } },
    out: {
      scale: 0.2,
      opacity: 0,
      transition: { duration: 0.5, ...transition },
    },
  };

  console.log("asa", news);
  return (
    <>
      <motion.div
        className="h-screen"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <h1 className="text-center my-5 font-bold">Saved News</h1>
        {checkdata()}
        <hr className="mb-5 border-grey" />
        <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto">
          {listSaved()}
        </div>
      </motion.div>
    </>
  );
}

export default Saved;

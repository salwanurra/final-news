import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getIndonesiaNews, newsSelector } from "../store/news/NewsSlice";
function Indonesia() {
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

  const dispatch = useDispatch();
  const {data} = useSelector(newsSelector)
  console.log(data)
  useEffect(() => {
    dispatch(getIndonesiaNews());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <div className="grid grid-cols-3 my-4">
          {/* {getIndonesiaNews.map((item, index) => (
            <div key={index}>
            </div>
          ))} */}
          <Card />
        </div>
            
      </motion.div>
    </>
  );
}

export default Indonesia;

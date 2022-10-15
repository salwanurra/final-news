import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getFindNews, getIndonesiaNews, newsSelector } from "../store/news/NewsSlice";
import Loading from "../components/Loading";

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
  const { news, loading } = useSelector(newsSelector)
  const queryParams = new URLSearchParams(window.location.search);
  let search = queryParams.get("search");


  useEffect(() => {
    if (search) {
      dispatch(getFindNews({search}))
    } else {
      dispatch(getIndonesiaNews());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(news)
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <h1 className="text-center my-5 font-bold">{search} News</h1>
        <hr className="mb-5 border-grey" />
          {loading && <Loading />}
        <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto">
          {news?.articles?.map((item, index) => (
            <div key={index}>
              <Card value={item}/>
            </div>
          ))}
        </div>
            
      </motion.div>
    </>
  );
}

export default Indonesia;

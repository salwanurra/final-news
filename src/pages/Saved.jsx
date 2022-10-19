import React from "react";
import Card from "../components/Card";
import { Empty } from "antd"
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
          <div className="flex justify-center items-center h-4/5">
            <Empty />
          </div>
        );
      }
    } else {
      return (
        <div className="flex justify-center items-center h-4/5">
          <Empty />
        </div>
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
            toggle={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93zM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 013.75 21z" />
              </svg>
            }
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
        <h1 className="text-center my-5 font-bold text-2xl">Saved News</h1>
        {checkdata()}
        <hr className="mb-5 border-grey" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
          {listSaved()}
        </div>
      </motion.div>
    </>
  );
}

export default Saved;

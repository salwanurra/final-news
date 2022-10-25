import React from "react";
import Card from "../components/Card";
import { Empty } from "antd";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromSaved } from "../store/saved/SaveSlice";
import  Swal from "sweetalert2"
function Saved() {
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
  const news = useSelector((state) => state.saved.saved);
  
  const handleUnsave = (title) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      reverseButtons : true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          "",
          'success',
          dispatch(deleteFromSaved({ title: title }))
        )
      }
    })
 
  };

  const checkdata = () => {
    const data = JSON.parse(localStorage.getItem("saved"));
    if (data !== null) {
      if (data.length === 0) {
        return (
          <div className="justify-center items-center mt-24">
            <Empty style={{ fontSize: "0%" }} />
            <div className="justify-center text-center items-center h-3/5">
              {" "}
              No News Saved
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="justify-center items-center mt-24">
          <Empty style={{ fontSize: "0%" }} />
          <div className="justify-center text-center items-center h-3/5">
            {" "}
            No News Saved
          </div>
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
            value={item}
            saveClick={() => handleUnsave(item.title)}
            toggle={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            }
          />
        ));
      }
    }
  };

  return (
    <>
      <motion.div
        className="h-screen"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <h1 className="text-center mt-5 font-bold text-lg">Saved News</h1>
        <hr className="mb-5 border-grey" />
        {checkdata()}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
          {listSaved()}
        </div>
      </motion.div>
    </>
  );
}

export default Saved;

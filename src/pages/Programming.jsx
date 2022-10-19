import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getFindNews,
  getProgrammingNews,
  newsSelector,
} from "../store/news/NewsSlice";

import { addNews, checkData, deleteNews } from "../store/saved/SaveSlice";

import Loading from "../components/Loading";

function Programming() {
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
  const { news, loading, isError } = useSelector(newsSelector);

  const queryParams = new URLSearchParams(window.location.search);
  let search = queryParams.get("search");
  const [title, setTitle] = useState("");
  const [buttonState, setButtonState] = useState("");
  const handleSave = (title, image, desc, source, detail) => {
    let news = {
      title,
      image,
      desc,
      source,
      detail,
    };

    dispatch(checkData(news));
    dispatch(addNews(news));
    dispatch(deleteNews({ title: title }));
    setButtonState(
      "Cuman Buat Trigger Perubahan data di button supaya useEffect nya ketrigger"
    );
  };

  const dynamicButton = (title) => {
    let prop = "";
    const data = JSON.parse(localStorage.getItem("saved"));
    if (data !== null) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].title === title) {
          JSON.parse(localStorage.getItem("saved"));
          prop = (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93zM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 013.75 21z" />
            </svg>
          );

          break;
        } else {
          JSON.parse(localStorage.getItem("saved"));
          prop = (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
          );
        }
      }
      if (data.length <= 0) {
        prop = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
    } else {
      prop = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    return prop;
  };

  const onError = (
    <div className="mt-32 text-2xl text-center">
      {" "}
      404! Money Not Found <br /> Server down or Request limit reached (100 / 24
      hour)
    </div>
  );

  const onLoading = (
    <div className="mt-32  justify-center flex items-center">
      {" "}
      <Loading />{" "}
    </div>
  );

  const listNews = () => {
    return news?.articles?.map((item, index) => (
      <div key={index}>
        <Card
          title={item.title}
          desc={item.description}
          image={item.urlToImage}
          source={item.source?.name}
          detail={item.url}
          toggle={dynamicButton(item.title)}
          saveClick={() =>
            handleSave(
              item.title,
              item.urlToImage,
              item.description,
              item.source?.name,
              item.url
            )
          }
        />
      </div>
    ));
  };

  useEffect(() => {
    if (search) {
      dispatch(getFindNews({ search }));
    } else {
      dispatch(getProgrammingNews());
      setTitle("Programming ");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setButtonState("");
  }, [buttonState]);

  console.log(news);
  return (
    <>
      <motion.div
        className="h-screen"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <h1 className="text-center my-5 font-bold text-2xl">
          {search} {title}News
        </h1>
        {loading && onLoading}
        {(!loading, isError && onError)}
        <hr className="mb-5 border-grey" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
          {listNews()}
        </div>
      </motion.div>
    </>
  );
}

export default Programming;

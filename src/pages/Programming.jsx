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
import ErrorMessage from "../components/ErrorMessage";

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
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-bookmark-check-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
              />
            </svg>
          );

          break;
        } else {
          JSON.parse(localStorage.getItem("saved"));
          prop = (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-bookmark-plus"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
            </svg>
          );
        }
      }
      if (data.length <= 0) {
        prop = (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-bookmark-plus"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
            <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
          </svg>
        );
      }
    } else {
      prop = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          class="bi bi-bookmark-plus"
          viewBox="0 0 16 16"
        >
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
        </svg>
      );
    }

    return prop;
  };

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
        <h1 className="text-center mt-5 font-bold text-lg">
          {search} {title}News
        </h1>
        {loading && <Loading />}
        {(!loading, isError && <ErrorMessage />)}
        <hr className="mb-5 border-grey" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
          {listNews()}
        </div>
      </motion.div>
    </>
  );
}

export default Programming;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import useNews from "../services/api/useNews";

const News = () => {
  const [news, setNews] = useState([]);
  const { getNews } = useNews();

  useEffect(() => {
    async function fetch() {
      try {
        const dados = await getNews();
        setNews(dados);
      } catch (error) {
        console.log(error.message);
      }
    }
    function firstRequest() {
      fetch();
    }

    if (firstRequest) {
      // eslint-disable-next-line no-func-assign
      firstRequest = false;
      fetch();
    }
  }, [getNews]);

  console.log("dados news", news);
  return (
    <div>
      <section className="">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-premier-primary"
          >
            <img
              src={news[0]?.Image}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-premier-primary"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl text-white font-semibold sm:text-5xl group-hover:underline group-focus:underline">
                {news[0]?.Title}
              </h3>
              <span className="text-xs dark:text-premier-rose">
                {news[0]?.PublisherDate}
              </span>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-premier-primary"
            >
              <img
                role="presentation"
                className="object-cover w-full object-top h-44 dark:bg-gray-500"
                src={news[1]?.Image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">
                  {news[1]?.Title}
                </h3>
                <span className="text-xs  dark:text-premier-rose">
                  {news[1]?.PublisherDate}
                </span>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-premier-primary"
            >
              <img
                role="presentation"
                className="object-cover w-full object-top h-44 dark:bg-gray-500"
                src={news[2]?.Image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">
                  {news[2]?.Title}
                </h3>
                <span className="text-xs  dark:text-premier-rose">
                  {news[2]?.PublisherDate}
                </span>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-premier-primary"
            >
              <img
                role="presentation"
                className="object-cover w-full object-top h-44 dark:bg-gray-500"
                src={news[3]?.Image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">
                  {news[3]?.Title}
                </h3>
                <span className="text-xs  dark:text-premier-rose">
                  {news[3]?.PublisherDate}
                </span>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-premier-primary hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full object-top h-44 dark:bg-gray-500"
                src={news[4]?.Image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">
                  {news[4]?.Title}
                </h3>
                <span className="text-xs  dark:text-premier-rose">
                  {news[4]?.PublisherDate}
                </span>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-premier-primary hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full object-top h-44 dark:bg-gray-500"
                src={news[5]?.Image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">
                  {news[5]?.Title}
                </h3>
                <span className="text-xs  dark:text-premier-rose">
                  {news[5]?.PublisherDate}
                </span>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-premier-primary hidden sm:block"
            >
              <img
                role="presentation"
                className="object-cover w-full object-top h-44 dark:bg-gray-500"
                src={news[6]?.Image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl text-white font-semibold group-hover:underline group-focus:underline">
                  {news[6]?.Title}
                </h3>
                <span className="text-xs  dark:text-premier-rose">
                  {news[6]?.PublisherDate}
                </span>
              </div>
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

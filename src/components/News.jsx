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
  return <div>
    
  </div>;
};

export default News;

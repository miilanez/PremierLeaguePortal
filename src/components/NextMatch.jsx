import React from "react";
import PremierLeagueLongLogo from "../assets/images/pl-sticky-logo.png";
import { useEffect, useState } from "react";
import useResults from "../services/api/useResults";

const NextMatch = () => {
  const [results, setResults] = useState([]);
  const { getResults } = useResults();

  useEffect(() => {
    async function fetch() {
      try {
        const dados = await getResults();
        setResults(dados);
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
  }, [getResults]);

  console.log("dados resultados", results);

  return (
    <div className="flex flex-col justify-center items-center p-1">
      <div className="w-11/12 h-2 bg-gradient-to-r from-premier-purple to-premier-rose"></div>
      <div className="bg-white w-full h-52 flex flex-col justify-center items-center ">
        <div
          id="last-match"
          className="flex flex-col justify-center items-center"
        >
          <h4 className="text-premier-rose font-semibold text-sm">
            Last Matches
          </h4>
          <div className="flex items-center justify-center w-44 h-16">
            <img className="w-32" src={PremierLeagueLongLogo} />
          </div>
          <h4 className="text-black font-semibold text-sm">Date Match</h4>
          <div className="bg-white hover:bg-gradient-to-r from-premier-green to-premier-light-blue p-2 px-4 flex flex-row items-center border-b">
            <div>
              <h1 className="font-semibold text-base">TeamA</h1>
            </div>
            <div className="bg-premier-primary px-4 m-2 text-white flex justify-center items-center">
              -
            </div>
            <div>
              <h1 className="font-semibold text-base">TeamB</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMatch;

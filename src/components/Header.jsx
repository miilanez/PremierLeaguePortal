import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-sky-900 w-full h-20 p-12 flex justify-between items-center">
      <div>
        <h1 id="title" className="text-slate-200 text-3xl">
          PREMIER LEAGUE
        </h1>
      </div>
      <div id="nav-menus" className="">
        <nav>
          <ul className="inline-flex">
            <li className="text-2xl text-slate-200 m-6">
              <Link to="/">PÁGINA PRINCIPAL</Link>
            </li>
            <li className="text-2xl text-slate-200 m-6">
              <Link to="classificacao">CLASSIFICAÇÃO</Link>
            </li>
            <li className="text-2xl text-slate-200 m-6">
              <Link to="sobre">SOBRE</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

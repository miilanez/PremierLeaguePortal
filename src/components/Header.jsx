/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import PremierLeagueLogo from "../assets/images/premierleague.png";
import Arsenal from "../assets/images/teams/arsenal.png";
import AstonVilla from "../assets/images/teams/aston.png";
import Bournemouth from "../assets/images/teams/bournemouth.png";
import Brentford from "../assets/images/teams/brentford.png";
import Brighton from "../assets/images/teams/brighton.png";
import Chelsea from "../assets/images/teams/chelsea.png";
import CrystalPalace from "../assets/images/teams/crystal.png";
import Everton from "../assets/images/teams/everton.png";
import Fulham from "../assets/images/teams/fulham.png";
import Leeds from "../assets/images/teams/leeds.png";
import Leicester from "../assets/images/teams/leicester.png";
import Liverpool from "../assets/images/teams/liverpool.png";
import ManCity from "../assets/images/teams/man_city.png";
import ManUtd from "../assets/images/teams/man_utd.png";
import Newcastle from "../assets/images/teams/newcastle.png";
import Nottingham from "../assets/images/teams/notingham.png";
import Southampton from "../assets/images/teams/southampton.png";
import Tottenham from "../assets/images/teams/tottenham.png";
import WestHam from "../assets/images/teams/west_ham.png";
import Wolves from "../assets/images/teams/wolves.png";

const Header = () => {
  return (
    <div className="h-48">
      <header className="w-full bg-white fixed flex flex-col">
        <div
          id="club-sites"
          className=" hidden w-full h-14 md:flex flex-row justify-center items-center"
        >
          <ul className="flex flex-row justify-around">
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Arsenal}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={AstonVilla}
                />
              </Link>
            </li>
            <li>
              <Link to="https://www.afcb.co.uk/?cachebust=2023011413">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Bournemouth}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Brentford}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Brighton}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Chelsea}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={CrystalPalace}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Everton}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Fulham}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Leeds}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Leicester}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Liverpool}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={ManCity}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={ManUtd}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Newcastle}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Nottingham}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Southampton}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Tottenham}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={WestHam}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img
                  className="w-8 h-8 m-1 hidden lg:flex justify-center items-center hover:scale-125"
                  src={Wolves}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="container flex justify-between w-full h-20 mx-auto m-2 p-4 dark:bg-premier-primary dark:text-gray-100">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <Link to="/">
              <div
                id="logo"
                className="bg-white rounded-r-full -m-10 md:-mt-85px w-24 md:w-32 h-24 md:h-32"
              >
                <img className="" src={PremierLeagueLogo} />
              </div>
            </Link>
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 text-2xl font-semibold text-white hover:text-premier-rose"
              >
                <Link to="/">Premier League</Link>
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 text-2xl font-semibold text-white hover:text-premier-rose"
              >
                <Link to="standings">Classificação</Link>
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 text-2xl font-semibold text-white hover:text-premier-rose"
              >
                <Link to="about">Sobre</Link>
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 text-2xl font-semibold text-white hover:text-premier-rose"
              >
                <Link to="/">Link</Link>
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 rounded">Logar</button>
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-premier-rose dark:text-gray-900">
              Cadastrar
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;

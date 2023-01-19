import React from "react";
import { Link } from "react-router-dom";
import News from "../components/News";

const Home = () => {
    return (
        <div>
            <header>
                <h1>Home</h1>
            </header>

            <main>
                <News />
            </main>

        </div>
    );
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";

const Sobre = () => {
    return (
        <div>
            <header>
                <h1>Sobre</h1>
            </header>

            <main>
                <p>
                <Link to="/">Acesse a página Home</Link> 
                </p>
            </main>

        </div>
    );
}

export default Sobre;
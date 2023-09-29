import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1> Error 404</h1>
            <p>Page introuvable</p>
            <Link to="/"> retourner a la page principale</Link>
        </div>
    );
};

export default Error;
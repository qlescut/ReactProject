import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <Link to="/App">Commentaires</Link>
            <Link to="/UsersList">Utilisateurs</Link>
        </nav>
    )
}

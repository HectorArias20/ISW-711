import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import NewsCovers from "../img/NewsCovers.jpg";
import "./style.css";




function Header(props) {
    const navigate = useNavigate();
    let [loggedUser, setval] = useState(JSON.parse(sessionStorage.getItem('TokenUser')));

    useEffect(() => {
        if (loggedUser) {

        } else {
            //***Redirect to login***
            navigate("/")
        }

    }, []);
    const Cerrar = () => {
        sessionStorage.clear();
        setval(loggedUser.filter());

    }

    return (
        <header className="Herder">
            <nav className="nav">             
                <img src={NewsCovers} className="News"></img>
                <button className="nav-toggle">
                    <i className="fa-solid fa-bars-progress"></i>
                </button>
                <ul className="nav-menu nav-menu_visible">
                    <li className="nav-menu-item"><NavLink className="nav-menu-link nav-link" to="/home">Home</NavLink></li>
                    <li className="nav-menu-item"><NavLink className="nav-menu-link nav-link" to="/NewSource">News Source</NavLink></li>
                    <li className="nav-menu-item"><NavLink className="nav-menu-link nav-link" to="/Categories">Categories</NavLink></li>
                    <li className="nav-menu-item"><NavLink onClick={() => Cerrar()} className="nav-menu-link nav-link" >Cerrar Sesion</NavLink></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;

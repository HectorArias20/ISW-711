import { createRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import "./categories.css"



function Category(name) {

    const loggedUser = JSON.parse(sessionStorage.getItem('TokenUser'));

    axios.post('http://localhost:8000/api/category', {
        name: name
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + loggedUser
        }
    }).then(function (response) {
        console.log(response);

    }).catch(err => {//valida errores
        console.log("error: " + err);
    });
};

function Categories() {


    const navigate = useNavigate();

    let [name, setName] = useState('');

    return (

        <>
            {<Header />}
            <div className="container_categories">
                <h1>Categories</h1>
                <div className='contain' >
                    <div className="tex_field">
                        <input className="email" type="text" onChange={ev => setName(ev.target.value)} required />
                        <span></span>
                        <label>Name</label>
                    </div>
                    <Link to="/Category"><input type="submit" value="Save" onClick={() => Category(name, navigate)} /></Link>
                </div>
            </div>
            {<Footer />}
        </>
    );
}
export default Categories;
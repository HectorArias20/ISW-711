import { createRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import "./categories.css"






function Categories() {


    const navigate = useNavigate();

    const cate_id = sessionStorage.getItem('Categoria');
    const nc = sessionStorage.getItem('NomCategoria');

    let [name, setName] = useState('');

    function HandleEdit(name, id) {

        const loggedUser = JSON.parse(sessionStorage.getItem('TokenUser'));
    
    
        useEffect(() => {
            axios.put('http://localhost:8000/api/category/?id=' + id, {
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
        }, []);
    };
    return (
        <>
            {< Header />}
            <div>
                <h1>Categories</h1>
                <div >
                    <div >
                        <label>Name</label>
                        <input className="email" type="text" placeholder={nc} on={ev => setName(ev.target.value)} required />

                    </div>
                    <Link to="/Category"><input type="submit" value="Edit" onClick={() => HandleEdit(cate_id,name, navigate)} /></Link>
                
                </div>
            </div>
            {< Footer />}
        </>
    );
}
export default Categories;
import { createRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import "./categories.css"



function Categories() {

    return (

        <>
        {<Header/>}
            <div className="container_categories">
                <h1>Categories</h1>
                <div className='contain' >
                    <div className="tex_field">
                        <input className="email" type="text" required />
                        <span></span>
                        <label>Name</label>
                    </div>
                    <input type="submit" className='cate-boton' value="Save" />
                </div>
            </div>
            {<Footer/>}
        </>
    );
}
export default Categories;
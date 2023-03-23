import { createRef } from 'react';
import { Route, Routes,useNavigate } from 'react-router';
import React, {useState, useEffect} from "react";
import "./footer.css"



function Footer(){

return(
    <>
    <footer>
            <div class="container_footer">
                <div class="footer_menu">
                    <a href="#"> MyCover </a>
                    <a href="#"> About </a>
                    <a href="#"> Help </a>
                </div>
                
            </div>
        </footer>
    </>
);
}

export default Footer;
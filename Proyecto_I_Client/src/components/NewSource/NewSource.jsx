import { Route, Routes, useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import Header from '../Header/header';
import axios from "axios";
import "./newsource.css"
import Footer from '../Footer/Footer';


function NewSource() {
  let navigate = useNavigate();
  let [loggedUser, setval] = useState(JSON.parse(sessionStorage.getItem('TokenUser')))

  // useEffect(() => {
  //   axios.get('', {
  //     headers: {
  //       'Authorization': 'Bearer ' + loggedUser,
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(function (response) {
  //     console.log(response);

  //   }).catch(err => {//valida errores
  //     console.log("error: " + err);
  //   });


  // }, []);



  return (
    <>
      {<Header />}
      <div class="text-box8">
        <h1> News Source </h1>
        <p className='pnewsource'>______________________________________________________________________________________________________</p>
      </div>
      <div class="text-box10">
        <form id="form" name="formulario">
          <input type="text" className='inputname' placeholder="Name" required />
          <input type="text" className='inputRSS' placeholder="RSS URL" required />
          <select name="Country " className='combo'>
            <option value="Categories"> Categories </option>
            <option value="costa rica "> Costa Rica </option>
            <option value="panama "> Panama </option>
          </select>
          <br />
          <br />
          <p className='pnewsource1'>__________________________________________________________________________________</p>
          <br />
          <a href="# " class="icon1" onclick="guardar_usuarios();">Save</a>
        </form>
      </div>
      {<Footer/>}

    </>


  );
}
export default NewSource;
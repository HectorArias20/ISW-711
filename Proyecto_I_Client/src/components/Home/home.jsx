import { createRef } from 'react';
import { Route, Routes,useNavigate } from 'react-router';
import React, {useState, useEffect} from "react";
import Header from '../Header/header';
import Team from '../Home/team';
import Footer from '../Footer/Footer';
import axios from "axios";
import "./style.css";

function Home(){
   let navigate=useNavigate();
   let [loggedUser, setval] = useState(JSON.parse(sessionStorage.getItem('TokenUser')))
   let [team, setTeam] = useState({});

   useEffect(() => {
      axios.get('',{
         headers: {
         'Authorization': 'Bearer '+loggedUser,
         'Content-Type':'application/json'
          }
     }).then(function (response) {
         console.log(response);
         setTeam(response.data.data);

       }).catch(err=>{//valida errores
         console.log("error: "+err);
       });


   }, []);
   const LlenarTeam = (
      team.length ? <Team team={team} /> : <p>Loading...</p>
    )
   

 return(
 <div id='Hola'>
   {<Header/>}
   {LlenarTeam}
   {<Footer/>}
 </div>);   
}
export default Home;
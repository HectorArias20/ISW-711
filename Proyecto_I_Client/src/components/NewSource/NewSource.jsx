import { Route, Routes, useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import Header from '../Header/header';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./newsource.css"
import Footer from '../Footer/Footer';


function NewSourcer(url,name,category_id) {

  const loggedUser = JSON.parse(sessionStorage.getItem('TokenUser'));
  const UserId = JSON.parse(sessionStorage.getItem('UserId'));
  console.log(category_id);

  axios.post('http://localhost:8000/api/newsource', {
      url: url,
      name: name,
      category_id: category_id,
      user_id: UserId
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


function NewSource() {

  const navigate = useNavigate();

    let [url, setUrl] = useState('');
    let [name, setName] = useState('');
    let [category, setCategory] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/publicCat')
      .then(response => {
        setData(response.data);
        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const options = data.map(item => (
    <option key={item._id} value={item._id}>{item.name}</option>
  ));



  return (

    <>
      {<Header />}
      <div>
        <h1> News Source </h1>
        <p>______________________________________________________________________________________________________</p>
      </div>
      <div>
        <form id="form" name="formulario">
          <input type="text" onChange={ev => setName(ev.target.value)} placeholder="Name" required />
          <input type="text" onChange={ev => setUrl(ev.target.value)} placeholder="RSS URL" required />
          <select onChange={ev => setCategory(ev.target.value)}>{options}</select>
          <br />
          <p>__________________________________________________________________________________</p>
          <br />
          <Link to="/Source"><input type="submit" value="Save" onClick={()=>NewSourcer(url,name,category,navigate)}/></Link>
        </form>
      </div>

      {<Footer />}

    </>

  );
}



export default NewSource;
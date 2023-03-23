import { createRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./style.css";

function Home() {
  const [noticia, setNews] = useState([]);

  const loggeUser = JSON.parse(sessionStorage.getItem('TokenUser'));
  const UserId = JSON.parse(sessionStorage.getItem('UserId'));

  useEffect(() => {
  fetch('http://localhost:8000/api/new/' + UserId, {
    headers: {
      'Authorization': 'Bearer ' + loggeUser,
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      const mappedData = data;
      setNews(mappedData);
      console.log(mappedData);

    })
    .catch(error => console.error(error));
  }, []);



  return (
    <>
      {<Header />}
      <div class='newsContainer'>
        {noticia.map((newx) => (
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{newx.title}</Card.Title>
            <Card.Text>
              {newx.short_description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        ))}
      </div>
      {<Footer />}
    </>
  );
}
export default Home;
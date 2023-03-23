import { createRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import "./categories.css"
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Category = () => {
    const [categories, setCategories] = useState([]);

    const loggeUser = JSON.parse(sessionStorage.getItem('TokenUser'));
    const UserId = JSON.parse(sessionStorage.getItem('UserId'));



    useEffect((_id) => {
        axios.get('http://localhost:8000/api/category/' +_id, {
           headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + loggeUser
           }
       }).then(function (response) {
           setCategories(response.data)
           console.log(_id);
           

       }).catch(err => {//valida errores
           console.log("error: " + err);
       });
   }, []);
   
   const handleDelete = async (id) => {

    axios.delete('http://localhost:8000/api/newsource?id=' + id,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + loggeUser
            }
        }).then(function (response) {
            console.log(response);

        }).catch(err => {//valida errores
            console.log("error: " + err);
        });

    console.log(id);

};



    return (
        <>
            {< Header />}
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <ul key={category._id}>
                                <tr>
                                    <td>
                                        {category.name}
                                    </td>
                                    <td>
                                        <Button onClick={() => handleDelete(category._id)}>Delete</Button> / <button>Edit</button>
                                    </td>
                                </tr>
                            </ul>
                        ))}
                    </tbody>

                </Table>
                <Link to="/Categories"><input type="submit" value="Add New" /></Link>


            </div>


            {<Footer />}
        </>
    );
};


export default Category;
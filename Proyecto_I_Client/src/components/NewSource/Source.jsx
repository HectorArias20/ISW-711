import { Route, Routes, useNavigate } from 'react-router';
import React, { useState, useEffect } from "react";
import Header from '../Header/header';
import axios from "axios";
import "./newsource.css"
import Footer from '../Footer/Footer';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Source =  () => {
    const [sources, setSource] = useState([]);

    const loggeUse = JSON.parse(sessionStorage.getItem('TokenUser'));
    const UserId = JSON.parse(sessionStorage.getItem('UserId'));
    useEffect(() => {
         axios.get('http://localhost:8000/api/newsource/' + UserId, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + loggeUse
            }
        }).then(function (response) {
            setSource(response.data)
            

        }).catch(err => {//valida errores
            console.log("error: " + err);
        });
    }, []);
    

    const handleDelete = async (id) => {

        axios.delete('http://localhost:8000/api/newsource?id=' + id,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + loggeUse
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
                            <th>Name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sources.map((sourc) => (
                            <ul key={sourc._id}>
                                <tr>
                                    <td>
                                        {sourc.name}
                                        {sourc.category_id}
                                    </td>
                                    <td>
                                        <Button onClick={() => handleDelete(sourc._id)}>Delete</Button> / <Button>Edit</Button>
                                    </td>
                                </tr>
                            </ul>
                        ))}
                    </tbody>

                </Table>
                <Link to="/NewSource"><input type="submit" value="Add New" /></Link>


            </div>


            {<Footer />}
        </>
    );
};


export default Source;
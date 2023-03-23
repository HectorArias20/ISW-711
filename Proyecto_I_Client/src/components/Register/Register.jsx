import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router"
import axios from "axios";


function Register(props) {

    let [users, setUsers] = useState({});

    let navigate = useNavigate();
    const Registrar = async (us,last,em, cont) => {
        let date = [];
        if (!us || !last || !em || !cont) {//se validan los campos llenos
            alert("Favor llenar todos los campos");
        } else {
            axios.post('http://localhost:8000/api/user', {
                first_name: us,
                last_name: last,
                email: em,
                password: cont,
                role_id: 2
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response);
                if (response) {
                    navigate("/");
                }
            }).catch(err => {//valida errores
                console.log("error: " + err);
                alert("Datos incorrectos");
            });

        };

    };



    let [user, setUserse] = useState('');
    let [lastname, setlastname] = useState('');
    let [email, setEmail] = useState('');
    let [contra, setContra] = useState('');
    return (
        <>
            <div className="container1">
                <h1>Register</h1>
                <div id="contain">
                    <div className="tex_field">
                        <input className="email" type="text" onChange={ev => setUserse(ev.target.value)} required />
                        <span></span>
                        <label>Name</label>
                    </div>
                    <div className="tex_field">
                        <input className="email" type="text" onChange={ev => setlastname(ev.target.value)} required />
                        <span></span>
                        <label>Last Name</label>
                    </div>
                    <div className="tex_field">
                        <input className="email" type="email" onChange={ev => setEmail(ev.target.value)} required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="tex_field">
                        <input className="contra" type="password" onChange={ev => setContra(ev.target.value)} required />
                        <span></span>
                        <label>Password</label>
                    </div>

                    <input type="submit" value="Register" className="regist" onClick={() => Registrar(user,lastname, email, contra)} />
                    <div className="nores">you are registered? <a href="/">login</a></div>
                </div>

            </div>
        </>
    );
}

export default Register;
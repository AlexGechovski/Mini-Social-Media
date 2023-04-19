import React, { useState } from "react";
import {
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';
import '../css/Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3000/login`, {
            name
        }, {
            withCredentials: true
        }).then(() => {
            sessionStorage.setItem("id", name);
            navigate(`/`);
            window.location.reload();
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="login-form">
            <form className="login-from-frame">
                <h5>Login</h5>
                <MDBInput
                    className='mb-4'
                    type='name'
                    label='Name'
                    onChange={(e) => setName(e.target.value)}
                />
                <MDBBtn
                    type='submit'
                    block
                    onClick={e => handleSubmit(e)}
                >
                    Sign in
                </MDBBtn>
            </form>
        </div>
    );
}

export default Login;
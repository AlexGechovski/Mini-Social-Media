import React, { useState } from "react";
import {
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';
import '../css/Login.css';
import axios from "axios";

const Register = () => {
    const [name, setName] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:3000/register`, {
            name
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="login-form">
            <form className="login-from-frame">
                <h5>Register</h5>
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
                    Sign up
                </MDBBtn>
            </form>
        </div>
    );
}

export default Register;
import React from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalDialog,
    MDBModalTitle,
    MDBModalBody,
    MDBModalContent,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.post(`http://localhost:3000/logout`, {}, { withCredentials: true })
        .then(() => {
            sessionStorage.removeItem("id");
            navigate(`/`);
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return (
        <MDBModal
            {...props}
            size="lg"
        >
        <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>
                    <MDBModalTitle>
                        Logout
                    </MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                    <p>Are you sure you want to logout?</p>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn onClick={() => handleLogout()} variant="outline-success">Yes</MDBBtn>
                    <MDBBtn onClick={props.onHide} variant="outline-danger">No</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
        </MDBModal>
    );
}

export default Logout;
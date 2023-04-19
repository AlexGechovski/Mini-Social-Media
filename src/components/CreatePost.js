import React, { useState } from "react";
import {
    MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalDialog,
    MDBModalTitle,
    MDBModalBody,
    MDBModalContent,
    MDBModalFooter,
    MDBInput
  } from 'mdb-react-ui-kit';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = (props) => {
    const navigate = useNavigate();
    const [content, setContent] = useState(null);

    const handleCreate = async () => {
        await axios.post(`http://localhost:3000/posts`, {
            content: content
        }, { 
            withCredentials: true
        })
        .then(() => {
            navigate(`/view`);
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
                        Create Post
                    </MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                    <MDBInput 
                        label='Content' 
                        type='text' 
                        onChange={(e) => setContent(e.target.value)}
                    />
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn onClick={() => handleCreate()} variant="outline-success">Create</MDBBtn>
                    <MDBBtn onClick={props.onHide} variant="outline-danger">Close</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
        </MDBModal>
    );
}

export default CreatePost;
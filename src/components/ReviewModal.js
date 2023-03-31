import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
// import addNotification from 'react-push-notification';
//  import { Notifications } from 'react-push-notification';

const Button = styled.button`
padding:1em ;
font-size:1rem;
width:910%;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;`

const Buttons = styled.button`
padding:1em;
font-size:1rem;
width:94%;
curser:pointer;
border-radius:5px;
border:2px solid #CD5888;`

const Input = styled.input`
padding:1em 2em;
width:70%;
border-radius:5px;
background:whitesmoke;
border:2px solid lightGreay;
background: transparent;
`
const Typography = styled.div``
const Typography1 = styled.div`
display:flex;
gap:2em;
padding-top:2em;
flex-direction:column;
align-items:center;
`
const Box = styled.div`
width:35%;
padding:3em;
margin:0 auto;
border-radius:10px;
background:white;
border:2px solid  lightGrey;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%) ;

`
const TextArea = styled.textarea`
padding:2em;
width:80%;`

const Paragraph = styled.p`
font-size:1.1em;`

const ButtonConfirm = styled.div`
margin-right:33em;
`

const HeadingMethod = styled.h2`
text-align:center;
`

const ReviewModal = ({ openReview, setOpenReview }) => {

    return (

        <Box sx={styled}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
                <HeadingMethod>Post review</HeadingMethod>
                <Paragraph> Stayed here before?</Paragraph>
                <Paragraph>Tell us what you think about the place to help others choose.</Paragraph>

            </Typography>

            <Typography1 id="modal-modal-description" sx={{ mt: 2 }}>
                <TextArea placeholder="Enter a review" />

                < ButtonConfirm >
                    <Button >Post</Button>
                </ButtonConfirm>

                <Buttons onClick={() => setOpenReview(false)}>Cancel</Buttons>

            </Typography1>
        </Box>

    )
}

export default ReviewModal

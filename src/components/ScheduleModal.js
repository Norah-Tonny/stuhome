import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
// import addNotification from 'react-push-notification';
//  import { Notifications } from 'react-push-notification';


const Button = styled.button`
padding:1em ;
font-size:1rem;
width:505%;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;`

const HeadingMethod = styled.h2``

const Paragraph = styled.p`
font-size:1.1em;`

const Buttons = styled.button`
padding:1em;
font-size:1rem;
width:80%;
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
const Typography = styled.div`

display:flex;
gap:2em;
padding-top:2em;
flex-direction:column;
align-items:center;
`

const ButtonConfirm = styled.div`
margin-right:26em;
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

function ScheduleModal({ openSchedule, setOpenSchedule }) {
    // const successNotification = ()=>{
    //     addNotification({
    //     //   title: 'Success',
    //       title: 'You have successfully set a schedule ',
    //       message: 'Welcome to stuhome',
    //       theme: 'light',
    //       closeButton:"X",
    //       backgroundTop:"green",
    //       backgroundBottom:"yellowgreen"
    //     })
    //   };

    return (
        <Box sx={styled}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
                <HeadingMethod>Pay avisit</HeadingMethod>
                <Paragraph>Still want to see the place?</Paragraph>
                <Paragraph>Book a time for us to take you viewing.</Paragraph>

            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Input type="date" placeholder="write the date" />
                <Input type="time" placeholder="write time" />
                <Input placeholder="enter your contact" />
                <ButtonConfirm>
                    <Button >Pay a visit</Button>
                </ButtonConfirm>
                <Buttons onClick={() => setOpenSchedule(false)}>Cancel</Buttons>

            </Typography>
        </Box>

    )

}

export default ScheduleModal

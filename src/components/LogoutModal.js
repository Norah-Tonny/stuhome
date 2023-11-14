// import React from 'react'

// import styled from "styled-components";
// import { json, Link } from "react-router-dom";
// import { useState } from "react";

// const Button = styled.button`
// padding:1em 1em ;
// font-size:1rem;
// width:315%;
// curser:pointer;
// background:#CD5888;
// border-radius:5px;
// border:none;
// margin:0 auto;
// `

// const Buttons = styled.button`
// padding:1em;
// font-size:1rem;
// width:79%;
// curser:pointer;
// border-radius:5px;
// border:2px solid #CD5888;`

// const Input = styled.input`
// padding:1em;
// width:70%;
// border-radius:5px;
// background:whitesmoke;
// border:2px solid lightGreay;
// background: transparent;
// `
// const Typography = styled.div``
// const Typography1 = styled.div`
// display:flex;
// gap:2em;
// padding-top:2em;
// flex-direction:column;
// align-items:center;
// `
// const Box = styled.div`
// width:35%;
// padding:3em;
// margin:0 auto;
// border-radius:10px;
// background:white;
// border:2px solid  lightGrey;
// position:absolute;
// top:50%;
// left:50%;
// transform:translate(-50%,-50%);`

// const ButtonConfirm = styled.div`
//  margin-right: 21em;`

// const Paragraph = styled.p`
// font-size:1.1em;`

// const HeadingMethod = styled.h2`
// text-align:center;
// margin-bottom:1em;`


// const LogoutModal = ({ isOpen, setIsOpen }) => {
    
//     return (
//         <Box sx={styled}>
//             <Typography id="modal-modal-title" variant="h3" component="h2">
//                 <HeadingMethod>Are you sure you want to login?</HeadingMethod>
//             </Typography>

//             <Button onClick={payment}>Confirm Payment</Button>
                
//                 <Buttons onClick={() => setIsOpen(false)}>Cancel</Buttons>

           
//         </Box>
//     )
// }

// export default LogoutModal

import React, { useContext } from 'react';
import styled from 'styled-components';
import { json, Link } from "react-router-dom";
import { Context } from '../State';

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
transform:translate(-50%,-50%);`

const Typography = styled.div``

const HeadingMethod = styled.h2`
text-align:center;
margin-bottom:1em;`


const Button = styled.button`
padding:1em 2em;
font-size:1rem;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;
`

const Buttons = styled.div`
display:flex;
gap:5em;
// justify-content:space-around;
flex-direction:row;
`


const Logout = ({ isOpen, setIsOpen }) => {
  
  const context = useContext(Context)
  const { userOn } = context
  const[isLoggedIn, setIsLoggedIn]=userOn

  return (
    <Box>
 <Typography id="modal-modal-title" variant="h3" component="h2">
                <HeadingMethod>Are you sure you want to login?</HeadingMethod>
      </Typography>

      <Buttons>
        <Link to="/"><Button onClick={()=>setIsLoggedIn(false)}>Yes</Button></Link>
       <Link to="/"><Button>No</Button></Link>
        </Buttons>

    </Box>
  )
}


export default Logout


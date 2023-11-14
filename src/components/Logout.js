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




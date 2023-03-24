import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../State';

const LogoutContainer = styled.div``

const Paragraph = styled.p`
font-size:1em;
margin-right:3em;`

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


const Logout = () => {
  
  const context = useContext(Context)
  const { userOn } = context
  const[isLoggedIn, setIsLoggedIn]=userOn

  return (
    <LogoutContainer>
      <Paragraph>Are you sure you want to log out?</Paragraph>
      <Buttons>
        <Link to="/"><Button onClick={()=>setIsLoggedIn(false)}>Yes</Button></Link>
       <Link to="/"><Button>No</Button></Link>
        </Buttons>

    </LogoutContainer>
  )
}


export default Logout

import { useState, useContext, useEffect } from "react";
import { db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { json, Link } from "react-router-dom";
import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Context } from "../State";
import { auth } from "../Firebase";
import { Navigate } from "react-router-dom";

const LoginContainer = styled.div`
background:whitesmoke;
justify-content:space-around;
text-align:center;
paddingborder-radius:5px;
display: flex; 
justify-content: space-between;
 gap: 2em; 
 padding: 1em;                           
  width: 85%;
   margin: 0 auto;
  
 `;

const LoginDetails = styled.div`
width:30%;
@media (max-width: 768px) {
margin:0 auto;
  }
`
const LoginHeading = styled.h1`
font-size:1.5rem;
font-weight:bold;
margin-bottom:2em;`
const Paragraph = styled.p``;


const LoginLeft = styled.div`
background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url("https://images.pexels.com/photos/4217/hotel-bed-bedroom-room.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); 
background-repeat: no repeat;
 background-size: cover;                                                                                                                                                               
width: 50%;
height:50vh;
 font-size: 3rem;
 color:#CD5888;
  font-weight: bold; 
  display: flex;
   flex-direction: column;
    justify-content: center; 
    @media (max-width: 768px) {
      display:none;    
    
      }
  `
const Inputs = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:3em;
`

const PasswordContainer = styled.div`
box-shadow:0 0 3px 1px gray;
width:100%;
border-radius:5px;
padding:.9em;
@media (max-width: 768px) {
  width:300%;
  padding:.5em;
    }
`

const PasswordInput = styled.input`
 width: 150%;
 background:whitesmoke;
  outline: none;
   border:none;
   @media (max-width: 768px) {
    width:500%;
 ;
      }
    `

const ShowPassword = styled.div`

width: fit-content; 
height: fit-content;
 cursor: pointer;

    `

const InputShowFlex = styled.div`
display: flex; 
align-items: center;
width:100%;
`

const Button = styled.button`
padding:1em 2em;
font-size:1rem;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;
width:105%;
@media (max-width: 768px) {
  width:100%;
  padding:.8em;
    }
`

const LoginInputs = styled.input`
width:100%;
border:none;
box-shadow:0 0 3px 1px gray;
border-radius:5px;
padding:1.3em;
@media (max-width: 768px) {
width:300%;
padding: 1em;
  }
`;

const LoginInput = styled.input``;

const LoginParagraph = styled.p`
font-size:1em;
margin-right:3em;
`;

const InnerContainer = styled.div`
border:3px solid #CD5888;
text-align:center;
width:20%;
border-radius:10px;
margin:0 auto;
padding:3em;
align-items:center;
 `
const InnerLogin = styled.div`
`
const LoginPara = styled.p`
margin-left:3em;`

const LoginParagraphCheck = styled.p`
text-align:center;
`
const LoginCheck = styled.div`
gap:3em;
align-items:center;
margin-left:5em;
display:flex;
flex-direction:row;
`;
const Form = styled.div`
align-items:center;
@media (max-width: 768px) {
  width:92%;


  }

`
const P = styled.p``;

const LoginItems = () => {
  const { emailState, passwordState, userOn } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false)
  const [email, setEmail] = emailState;
  const [password, setPassword] = passwordState;
  const [isLoggedIn, setIsLoggedIn] = userOn

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState("");

  console.log(error)

  const handleLogin = (event) => {
    const { email, password } = values
    event.preventDefault();
    try {

      if (values.email === "") {
        return setError("Please enter your email address")
      }

      if (values.password === "") {
        return setError("Please enter your password")
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          if (user) {
            setIsLoggedIn(true)

          }
          localStorage.setItem("user", JSON.stringify(user))

          console.log(error);
        })
    }
    catch (error) {
      console.log("error fill in the correct information", error);

    }

  }

  return (

    <LoginContainer>
      <LoginDetails>

        <LoginHeading>Login</LoginHeading>
        <Form>
          <Inputs>
            <LoginInputs type="email" placeholder="email" onChange={(e) => setValues(prev => ({ ...prev, email: e.target.value }))} />

            <PasswordContainer>
              <InputShowFlex>
                <PasswordInput type={show ? "text" : 'password'} placeholder='Password' onChange={(e) => setValues(prev => ({ ...prev, password: e.target.value }))} />
                <ShowPassword onClick={() => setShow(prev => !prev)}>{show ? <VisibilityIcon /> : <VisibilityOffIcon />}</ShowPassword>
                {isLoggedIn && <Navigate to="/listing" />}

              </InputShowFlex>
            </PasswordContainer>
            <P style={{ color: "red" }}>{error}</P>

          </Inputs>

          <Link to="/"><Button onClick={handleLogin}>Login</Button></Link>

        </Form>
      </LoginDetails>

      <LoginLeft>
        <Paragraph> Host your stuhome.</Paragraph>
      </LoginLeft>

    </LoginContainer>

  );
};
export default LoginItems;

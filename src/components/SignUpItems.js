import styled from "styled-components";
import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { border, padding } from "@mui/system";
import { auth } from "../Firebase";
import { useContext } from "react";
import { Context } from "../State";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const SignUpItemsContainer = styled.div`
 gap:6em; 
 background:whitesmoke;
 text-align:center;`;



const SignUpHeading = styled.h1``;

const SignUpInput = styled.input`
   padding: 2em;
   width:245%;
  border-radius: 5px;
  border:none;
  box-shadow:0 0 3px 1px gray;
  outline:none;
`;

const PasswordContainer = styled.div`
width:30%;
box-shadow:0 0 3px 1px gray;
margin-top:2em;
border-radius:5px;
padding:1.3em;
`

const PasswordInput = styled.input`
 width: 100%;
  outline: none;
  background:whitesmoke;
   border:none;
    `

const ShowPassword = styled.div`

width: fit-content; 
height: fit-content;
 cursor: pointer;`

const InputShowFlex = styled.div`
display: flex; 
align-items:center;
width:100%;
`
const SignUpSubmit = styled.div`
margin-right:5em;`

const Button = styled.button`
padding:1em;
width:100%;
font-size:1rem;
curser:pointer;
border-radius:5px;
margin:2em 2em;
background:#CD5888;
border:none;
`;
const Inputs = styled.div`
display:flex;
flex-direction:column;
gap:2em;
margin-right:25em;
`

const P = styled.p``;

const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
`


const SignUpItems = () => {

  const { emailState, passwordState } = useContext(Context);
  const [email, setEmail] = emailState;
  const [password, setPassword] = passwordState;
  const [showIcon, setShowIcon] = useState(false)
  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    Contact: "",
    select: "",
    Email: "",
    Password: "",
  });


  const [message, setMessage] = useState({
    message: ""
  })

  const [error, setError] = useState("");


  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(values)

    try {
      if (values.FirstName === "") {
        return setError("Enter your First Name ");
      }
      if (values.LastName === "") {
        return setError("Enter your Second Name ");
      }
      if (values.Contact === "") {
        return setError("Enter your Contact");
      }
      if (values.Email === "") {
        return setError("Enter your Email")
      }
      if (values.Password === "") {
        return setError("Enter your Password");
      }

      if (values.select === "") {
        return setError("Select one");
      }





      await addDoc(collection(db, "user"), values);
      setValues({
        FirstName: "",
        LastName: "",
        Contact: "",
        select: "",
        Email: "",
        Password: "",
      });

    }

    catch (error) {
      console.log(error);
    }

  };






  function handleUser(e) {

    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        console.log(user)


        alert("succesfully registered")
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }




  return (

    <SignUpItemsContainer>

      <SignUpHeading>Sign Up</SignUpHeading>
      <Form>


        <select
          value={values.select} onChange={(e) => { setValues({ ...values, select: e.target.value }) }}
          name="identity" id="identity-select"
          style={{
            width: "33%",
            padding: "2em",
            marginBottom: "3em",
            borderRadius: "5px",
            border: "none",
            boxShadow: "0 0 3px 1px gray",
            outline: "none"
          }}>
          <option value="">Are you a student or a landlord?</option>
          <option value="Student">student</option>
          <option value="Landloard">Landlord</option>

        </select>

        <Inputs>
          <SignUpInput value={values.FirstName} type="text" placeholder="First Name" onChange={(e) => { setValues({ ...values, FirstName: e.target.value }) }} />

          <SignUpInput value={values.LastName} type="text" placeholder="Last Name" onChange={(e) => { setValues({ ...values, LastName: e.target.value }) }} />

          <SignUpInput value={values.Contact} type="contact" placeholder="Contact" onChange={(e) => { setValues({ ...values, Contact: e.target.value }) }} />
          <SignUpInput type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

        </Inputs>


        <PasswordContainer>
          <InputShowFlex>
            <PasswordInput type={showIcon ? "text" : 'password'} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <ShowPassword onClick={() => setShowIcon(prev => !prev)}>{showIcon ? <VisibilityIcon /> : <VisibilityOffIcon />}</ShowPassword>

          </InputShowFlex>
        </PasswordContainer>

        <P style={{ color: "red" }}>{error}</P>

        <SignUpSubmit>
          <Link to="/login"> <Button onClick={(e) => handleUser(e)}>Sign Up </Button></Link>


        </SignUpSubmit>

      </Form>

    </SignUpItemsContainer>

  )
}
export default SignUpItems;
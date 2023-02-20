import styled from "styled-components";
import { useState } from "react";
import { db } from "../Firebase";
import {collection, addDoc } from "firebase/firestore";
import { Link } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUpItemsContainer = styled.div`
 gap:6em; 
 text-align:center;`;

const SignUpHeading = styled.h1``;

const SignUpParagraph = styled.p`
font-size:1em;`;

const SignUpInput = styled.input`
   padding: 2em;
   width:30%;
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
   border:none;
    `

const ShowPassword = styled.div`

width: fit-content; 
height: fit-content;
 cursor: pointer;`

const InputShowFlex = styled.div`
display: flex; 
align-items: center;
width:100%;
`
const SignUpSubmit = styled.div``

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

const SignUpArea = styled.div``;

const Label = styled.div`
`;

const P = styled.p``;

const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
`

const SignUpItems = () => {
    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
        Contact: "",
        Email: "",
        Password: "",
    });
  
  const [message, setMessage] = useState({
    message:""
  })

    
      const [error, setError] = useState({
        FirstnameError: "",
        LastnameError: "",
        ContactError: "",
        EmailError: "",
        PasswordError: ""
      });
    
  const handleChange = async (e) => {
    e.preventDefault()
        console.log(values)
      
        try {
          if (values.FirstName === "") {
            setError(prev => ({ ...prev, FirstnameError: "Enter your firstName " }));
          }
          if (values.SecondName === "") {
            setError(prev => ({ ...prev, SecondnameError: "Enter your secondName " }));
          }
          if (values.Contact === "") {
            setError(prev => ({ ...prev, ContactError: "Enter your contact" }));
          }
          if (values.Email === "") {
            setError(prev => ({ ...prev, EmailError: "Enter your email" }))
          }
          if (values.Password === "") {
            setError(prev => ({ ...prev, PasswordError: "Enter your password" }));
          }
    
          else {
    
            await addDoc(collection(db, "user"), values);
            setValues({
              FirstName: "",
              LastName: "",
              Contact: "",
              Email: "",
              Password: "",
            });
            
          }
        }
        catch (error) {
          console.log(error);
        }
    
      };
    


    return (
        
<SignUpItemsContainer>
    
      <SignUpHeading>Sign Up</SignUpHeading>
      <Form>
        {values.FirstName === "" ? <P style={{ color: "red" }}>{error.FirstnameError}</P>:<P></P>}
        <SignUpInput type="text" placeholder="First Name" onChange={(e) => { setValues({ ...values, FirstName: e.target.value }) }} />

        {values.LastName === "" ? <P style={{ color: "red" }}>{error.LastnameError}</P>:<P></P>}
        <SignUpInput type="text" placeholder="Last Name" onChange={(e) => { setValues({ ...values, LastName: e.target.value }) }} />

        {values.Contact === "" ? <P style={{ color: "red" }}>{error.ContactError}</P>:<P></P>}
        <SignUpInput type="contact" placeholder="Contact" onChange={(e) => { setValues({ ...values, Contact: e.target.value }) }} />

        {values.Email === "" ? <P style={{ color: "red" }}>{error.EmailError}</P>:<P></P>}
        <SignUpInput type="email" placeholder="Email" onChange={(e) => { setValues({ ...values, Email: e.target.value }) }} />

        <PasswordContainer>
                    <InputShowFlex>
              <PasswordInput type='password' placeholder='Password' onChange={(e) => { setValues({ ...values, Password: e.target.value }) }}  />

                        <ShowPassword onClick={()=>setValues(prev=>!prev)}>{values?<VisibilityIcon/>:<VisibilityOffIcon/>}</ShowPassword>
                    </InputShowFlex>
                </PasswordContainer>    


        <SignUpSubmit>
            <Link to="/"> <Button onClick={(e) => handleChange(e)}>Submit </Button></Link>
            

        </SignUpSubmit>
    

      
      </Form>
            
</SignUpItemsContainer>

    )
}
export default SignUpItems;
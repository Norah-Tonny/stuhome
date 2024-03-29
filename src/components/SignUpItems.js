import styled from "styled-components";
import { useState, useEffect } from "react";
import { db } from "../Firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { Link } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { auth } from "../Firebase";
import { useContext } from "react";
import { Context } from "../State";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import useMediaQuery from "@mui/material";

const SignUpItemsContainer = styled.div`
 gap:6em; 
 background:whitesmoke;
 text-align:center;
`;

const SignUpHeading = styled.h1``;

const SignUpInput = styled.input`
   padding: 2em;
   width:245%;
  border-radius: 5px;
  border:none;
  box-shadow:0 0 3px 1px gray;
  outline:none;
  @media (max-width: 768px) {
    margin-left:6em;
      justify-content:center;
      width:200%;
      padding:1.5em 2em;
    ;
      
        }
`;

const PasswordContainer = styled.div`
width:30%;
box-shadow:0 0 3px 1px gray;
margin-top:2em;
border-radius:5px;
padding:1.3em;
@media (max-width: 768px) {
  width:59%;
  padding:.7em;
  margin-right:1.8em;
    }
  // margin-left:1.8emz;
    }
`

const PasswordInput = styled.input`
 width: 100%;
  outline: none;
  background:whitesmoke;
   border:none;
   @media (max-width: 768px) {
    width:500%;
   }
    `

const ShowPassword = styled.div`

width: fit-content; 
height: fit-content;
 cursor: pointer;
 @media (max-width: 768px) {
  width:700%;
    }`

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
@media (max-width: 768px) {
  
  justify-content:center;
  
    }
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

      const { Email, Password } = values
      createUserWithEmailAndPassword(auth, Email, Password)
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

      const usersRef = collection(db, "users");

      await setDoc(doc(usersRef, values.Email), values);

      // await addDoc(collection(db, "user"), values);
      // setValues({
      //   FirstName: "",
      //   LastName: "",
      //   Contact: "",
      //   select: "",
      //   Email: "",
      //   Password: "",
      // });

    }

    catch (error) {
      console.log(error);
    }

  };

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
            outline: "none",

          }}>
          <option value="">Student/Landlord?</option>
          <option value="Student">Student</option>
          <option value="Landloard">Landlord</option>

        </select>

        <Inputs>
          <SignUpInput value={values.FirstName} type="text" placeholder="First Name" onChange={(e) => { setValues({ ...values, FirstName: e.target.value }) }} />

          <SignUpInput value={values.LastName} type="text" placeholder="Last Name" onChange={(e) => { setValues({ ...values, LastName: e.target.value }) }} />

          <SignUpInput value={values.Contact} type="contact" placeholder="Contact" onChange={(e) => { setValues({ ...values, Contact: e.target.value }) }} />
          <SignUpInput type="email" placeholder="Email" onChange={(e) => setValues(prev => ({ ...prev, Email: e.target.value }))} />

        </Inputs>


        <PasswordContainer>
          <InputShowFlex>
            <PasswordInput type={showIcon ? "text" : 'password'} placeholder='Password' onChange={(e) => setValues(prev => ({ ...prev, Password: e.target.value }))} />
            <ShowPassword onClick={() => setShowIcon(prev => !prev)}>{showIcon ? <VisibilityIcon /> : <VisibilityOffIcon />}</ShowPassword>

          </InputShowFlex>
        </PasswordContainer>

        <P style={{ color: "red" }}>{error}</P>

        <SignUpSubmit>
          <Link to="/login"><Button onClick={(e) => handleRegister(e)}>Sign Up</Button></Link>


        </SignUpSubmit>

      </Form>

    </SignUpItemsContainer>

  )
}
export default SignUpItems;
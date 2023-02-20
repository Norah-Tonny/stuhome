import { useState } from "react";
import { db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import styled from "styled-components";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { StyledEngineProvider } from "@mui/material";
import { Contrast } from "@mui/icons-material";

const LoginContainer = styled.div`
margin:2em 10em;
justify-content:space-around;
text-align:center;
border-radius:5px;
`;
const LoginHeading = styled.h1`
font-size:1.5rem;
font-weight:bold;
margin-bottom:2em;`;

const Inputs = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:2em;
`

const PasswordContainer = styled.div`
box-shadow:0 0 3px 1px gray;
width:30%;
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
// align-items: center;
width:100%;
`

const Button = styled.button`
padding:1em 2em;
font-size:1rem;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;`

const LoginInputs = styled.input`
padding:2em;
width:30%;
`;

const LoginInput = styled.input`

`;

const LoginParagraph = styled.p`
font-size:1em;

`;
const InnerContainer = styled.div``

const InnerLogin = styled.div``
// const LoginPara = styled.p`

const LoginPara = styled.p`
`

const LoginParagraphCheck=styled.p`
text-align:center;
`

const LoginCheck = styled.div`
gap:3em;
align-items:center;
display:flex;
flex-direction:row;
`;
const Form = styled.div`
align-items:center;`

const LoginItems = () => {

   const [show, setShow] = useState(false)

    const [values, setValues] = useState({
    username:"",
   email: "",
    password: "",
   })

    const [error, setError] = useState({
    username:"",
     emailError: "",
     passwordError: ""
    
    });

  console.log(error)


   const handleChange = async (e) => {
    e.preventDefault();
     try {
      if(values.username===""){
        setError(prev=>({...prev, usernameError:"Enter your email" }))
      }
       
      if(values.email===""){
       setError(prev=>({...prev, emailError:"Enter your email" }))
      }
       
    else if (values.password === ""){
        setError(prev=>({ ...prev, passwordError: "Enter your password" }));
    } 
       
  else { 
      console.log(error);

   }
  }
  catch (error) {
     console.log("error fill in the correct information", error);

    }

 
  const handleLoginInputChange = (event) => {
    setValues({ ...values, Login: event.target.values })
   }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email && values.password && values.Login) {
  }
  }
    
     }
    
  return (
   
    <LoginContainer>
      <InnerContainer>
        <InnerLogin>
          <LoginPara>okpoigpt</LoginPara>


</InnerLogin>


      <LoginHeading>Login</LoginHeading>
      <Form>
          <Inputs>
          <LoginInputs type="text" placeholder="Username"  onChange={(e) => { setValues({ ...values,Username: e.target.value }) }}/>
          <LoginInputs type="text" placeholder="email" onChange={(e) => { setValues({ ...values,email: e.target.value }) }}/>
          <PasswordContainer>
                    <InputShowFlex>
                        <PasswordInput type={show?"text":"password"} placeholder="Password" onChange={(e) => { setValues({ ...values,password: e.target.value }) }} />
                        
                        <ShowPassword onClick={()=>setShow(prev=>!prev)}>{show?<VisibilityIcon/>:<VisibilityOffIcon/>}</ShowPassword>
                    </InputShowFlex>
              </PasswordContainer>
          </Inputs>

      <LoginCheck>
        <LoginInput type="checkbox" />
    <LoginPara>  Remember me</LoginPara>  
          </LoginCheck>
 <Link to='/'><Button onClick={(e)=>handleChange(e)}>Login</Button> </Link>
 

        </Form>
        </InnerContainer>
   </LoginContainer>
    
  );
};
export default LoginItems;


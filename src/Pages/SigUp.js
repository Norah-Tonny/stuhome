// import styled from "styled-components";
// import { useState } from "react";
// import { db } from "../Firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { Link } from "@mui/material";
// import Nav from "../components/Nav";
// import Footer from "../components/Footer";
// const SignUpContainer = styled.div`
//  gap:6em; 
//  text-align:center;`;

// const SignUpHeading = styled.h1``;

// const SignUpParagraph = styled.p``;

// const SignUpInput = styled.input`
//    padding: 2em;
//    width: 30%;
//   border-radius: 5px;
//   border:none;
//   box-shadow:0 0 3px 1px lightgrey;
//   outline:none;
// `;
// const SignUpSubmit = styled.div``

// const Button = styled.button`
// padding:1em;
// width:100%;
// font-size:1rem;
// curser:;
// color:white;
// border-radius:5px;
// margin:2em 2em;
// border:none;
// `;

// const SignUpArea = styled.div``;

// const Label = styled.div`
// `;

// const P = styled.p``;

// const Form = styled.form`
// display:flex;
// flex-direction:column;
// align-items:center;
// `

// const SignUp = () => {
//   const [values, setValues] = useState({
//     FirstName: "",
//     SecondName: "",
//     Contact: "",
//     Email: "",
//     Password: "",
//   });

//   const [error, setError] = useState({
//     FirstnameError: "",
//     SecondnameError: "",
//     ContactError: "",
//     EmailError: "",
//     PasswordError: ""
//   });

//   const handleChange = async (e) => {
  
//     try {
//       if (values.FirstName === "") {
//         setError(prev => ({ ...prev, FirstnameError: "Enter your firstName " }));
//       }
//       if (values.SecondName === "") {
//         setError(prev => ({ ...prev, SecondnameError: "Enter your secondName " }));
//       }
//       if (values.Contact === "") {
//         setError(prev => ({ ...prev, ContactError: "Enter your contact" }));
//       }
//       if (values.Email === "") {
//         setError(prev => ({ ...prev, EmailError: "Enter your email" }))
//       }
//       if (values.Password === "") {
//         setError(prev => ({ ...prev, PasswordError: "Enter your password" }));
//       }

//       else {

//         await addDoc(collection(db, "error"), values);
//         setValues({
//           FirstName: "",
//           SecondName: "",
//           Contact: "",
//           Email: "",
//           Password: "",
//         });
        
//       }
//     }
//     catch (error) {
//       console.log("error fill in the correct information", error);
//     }

//   };

//   return (

//     <SignUpContainer>
//       <Nav />
//       <SignUpHeading>Sign Up</SignUpHeading>
//       <Form>
//         {values.FirstName === "" ? <P style={{ color: "red" }}>{error.FirstnameError}</P>:<P></P>}
//         <SignUpInput type="text" placeholder="First Name" onChange={(e) => { setValues({ ...values, FirstName: e.target.value }) }} />

//         {values.FirstName === "" ? <P style={{ color: "red" }}>{error.SecondnameError}</P>:<P></P>}
//         <SignUpInput type="text" placeholder="Second Name" onChange={(e) => { setValues({ ...values, SecondName: e.target.value }) }} />

//         {values.Contact === "" ? <P style={{ color: "red" }}>{error.ContactError}</P>:<P></P>}
//         <SignUpInput type="contact" placeholder="Contact" onChange={(e) => { setValues({ ...values, Email: e.target.value }) }} />

//         {values.Email === "" ? <P style={{ color: "red" }}>{error.EmailError}</P>:<P></P>}
//         <SignUpInput type="email" placeholder="Email" onChange={(e) => { setValues({ ...values, Email: e.target.value }) }} />

//         {values.Password === "" ? <P style={{ color: "red" }}>{error.PasswordError}</P>:<P></P>}
//         <SignUpInput type="text" value={setValues.Password} placeholder="Password" onChange={(e) => { setValues({ ...values, Password: e.target.value }) }} />


//         <SignUpSubmit>
//         <Link to="/"> <Button onClick={(e) => handleChange(e)}>Submit </Button></Link>

//         </SignUpSubmit>
      
//       </Form>

//       <Footer />
//     </SignUpContainer>
//   );
// };


// export default SignUp;  
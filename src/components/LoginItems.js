// // import Login from "../Pages/Login";
// import { useState } from "react";
// import { db } from "../Firebase";
// import { addDoc, collection } from "firebase/firestore";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const LoginContainer = styled.div`
// margin:10em;
// justify-content:space-around;
// text-align:center;
// border-radius:5px;
// `;
// const LoginHeading = styled.h3``;

// const Button =styled.button``

// const LoginInput = styled.input`
// padding:2em;
// width:30%;
// border-radius:5px;
// `;
// const LoginParagraph = styled.p`
// font-size:1.5em;
// color:white;
// `;


// const LoginParagraphCheck=styled.p`
// text-align:center;
// `

// const LoginCheck = styled.div``;
// const LoginItems = () => {

//    const [show, setShow] = useState(false)

//   const [values, setValues] = useState({
//    email: "",
//      password: "",
//    })

//    const [error, setError] = useState({
//      emailError: "",
//      passwordError: ""
    
//    });
//   console.log(error)


//    const handleChange = async (e) => {
//     e.preventDefault();
//     try {
//       if(values.email==""){
//        setError(prev=>({...prev, emailError:"Enter your email" }))
//       }
//        if (values.password == "") {
//         setError(prev=>({ ...prev, passwordError: "Enter your password" }));
//     } 
       
//     else {  await addDoc(collection(db, "error"), values);
//      setValues({
//      email: "",
//       password: "",

//      });
//       console.log(error);

//    }
//   }
//   catch (error) {
//      console.log("error fill in the correct information", error);

//     }

 
//   const handleLoginInputChange = (event) => {
//     setValues({ ...values, Login: event.target.values })
//    }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (values.email && values.password && values.Login) {
//   }
//   }
    
//      }
    
//   return (
   
//     <LoginContainer>

//           <LoginInput type="text" placeholder="Username" />
          
//           <LoginInput type="text" placeholder="password" />
          
//       <LoginCheck>
//     <LoginInput type="checkbox">Remember me</LoginInput>
// </LoginCheck>
// <Link to="/SignUp"><LoginParagraph>Create Account</LoginParagraph></Link>

//     <Link to="/">  <Button onClick={(e)=>handleChange(e)}>Login</Button> </Link>

//    </LoginContainer>
    
//   );
// };
// export default LoginItems;


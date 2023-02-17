import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

const ContactContainer = styled.div`
margin:0 auto;`

const ContactInput = styled.input`
width:30%;
padding:1.5em;`

const ContactButton = styled.button`
padding:1em 2em;
border-radius:3px 3px 3px 3px solid gray;`

const ContactSubject = styled.input`
width:30%;
padding:1.5em;`

const ContactHeading = styled.h1``
const Inputs = styled.div`
display:flex;
flex-direction:column;
gap:2em;
align-items:center; `

const ContactPara = styled.p``
const ContactDetails = styled.div`
text-align:center;`


const Contact = () => {
  return(
    <ContactContainer>
          <Nav />
          <ContactDetails>
        <ContactHeading>Let's Talk!</ContactHeading>
          <ContactPara>Get in touch with us using the contact details  below.</ContactPara>
       
              
          <Inputs>
        <ContactInput type="text" placeholder="Username" />
        <ContactInput type="text" placeholder="email" />
        <ContactInput type="number" placeholder="Phone Number"/>
        <ContactSubject type="message" placeholder="Subject" ></ContactSubject>
        <ContactButton>Submit</ContactButton>
              </Inputs>
              </ContactDetails>
          
          <Footer />
          
    </ContactContainer>
   ) 
}
export default Contact;
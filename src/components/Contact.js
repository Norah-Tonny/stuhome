import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

const ContactContainer = styled.div``

const ContactInput = styled.input``

const ContactButton = styled.button``

const ContactSubject = styled.input``

const ContactHeading = styled.h1``

const ContactPara = styled.p``


const Contact = () => {

    <ContactContainer>
        <Nav/>
        <ContactHeading>Let's Talk!</ContactHeading>
         <ContactPara>Get in touch with us using the contact details  below.</ContactPara>
        <ContactInput type="text" placeholder="Username" />
        <ContactInput type="text" placeholder="email" />
        <ContactInput type="number" placeholder="Phone Number"/>
        <ContactSubject type="message" placeholder="Subject" ></ContactSubject>
        <ContactButton>Submit</ContactButton>
        <Footer/>
    </ContactContainer>
    
}
export default Contact;
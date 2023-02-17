import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AboutItems from "../components/AboutItems";
const AboutContainer=styled.div``    


const About = () => {
    return(
    <AboutContainer>
        <Nav />
        <AboutItems/>
       <Footer/>
        </AboutContainer>
        )
    
}
export default About;
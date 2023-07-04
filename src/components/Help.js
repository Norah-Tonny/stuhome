import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";

const Container = styled.div``
const HelpContent = styled.div`
@media (max-width: 768px) {
  margin:0 auto;
  justify-content:center;
  flex-direction:column;
 
  }`

const HelpContainer = styled.div`
display:flex;
flex:row;
gap:5em;
margin:0 auto;

@media (max-width: 768px) {
  justify-content:center;
  flex-direction:column;
 gap:1.5em;

  }
`
const HelpText = styled.div`
display:flex;
flex-direction:column;`

const HelpHeading = styled.h4`
@media (max-width: 768px) {
  text-align:center;
margin:1em;

  }
`
const Para = styled.p`
`
const HelpPara = styled.p`
@media (max-width: 768px) {
margin-left:.5em;

  }
`


const HelpDetails = styled.div`
background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url("https://images.pexels.com/photos/9420758/pexels-photo-9420758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); 
background-repeat: no repeat;
 background-size: cover;                                                                                                                                                               
width: 50%;
height:50vh;

@media (max-width: 768px) {
width:100%;

  }

`   
const HelpParagraph=styled.div``

const Help = () => {
  return (
      <Container>
         <Nav />
    <HelpContainer>
               
      <HelpDetails>
        <HelpParagraph></HelpParagraph>

</HelpDetails>

        <HelpText>
          <HelpContent>
          <HelpHeading>What is Stuhome?</HelpHeading>
   <HelpPara>Stuhome is not a hostel provider but it link up  the collage and university students</HelpPara>
        <HelpPara>who are in need of hostels to the available hostels around them</HelpPara>
        </HelpContent>

        <HelpContent>
     <HelpHeading>How does Stuhome works?</HelpHeading>
    <HelpPara>Stuhome is an online platform that specializes in student accommodation.</HelpPara>
      <HelpPara> We help students, both in college and university, find an alternative place to stay.</HelpPara>
      <HelpPara>We also provide recommendations and reviews, a way for us to ensure that our users settle for the most affordable</HelpPara>
        <HelpPara> secure and comfortable place. </HelpPara>
        </HelpContent>

        <HelpContent>
            <HelpHeading>What is the verifications?</HelpHeading>
    <HelpPara>It provides the student with the available hostels around their places. </HelpPara>
          </HelpContent>
          </HelpText>


      </HelpContainer> 

          <Footer/>
      </Container>
      
    )
}
export default Help;
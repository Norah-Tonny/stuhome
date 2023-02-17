import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";

const Container = styled.div``
const HelpContent=styled.div``

const HelpContainer = styled.div`
display:flex;
flex:row;
margin:0 auto;
`
const HelpText = styled.div`
display:flex;
flex-direction:column;`

const HelpHeading = styled.h4`
`
const Para = styled.p`
`
const HelpPara = styled.p`
`

const HelpBackground = styled.div`
// background-image :url('https://images.pexels.com/photos/4134791/pexels-photo-4134791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/4134791/pexels-photo-4134791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/4134791/pexels-photo-4134791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
// background-repeat:no-repeat;
// background-size:cover;
// background-position:center;
// text-align:center;
// margin:0 auto;
width:50%;
`
const Help = () => {
  return (
      <Container>
         <Nav />
    <HelpContainer>
            <HelpBackground>
          <img style={{width:"50%",height:"50%"}} src='https://www.pexels.com/photo/white-wooden-bed-frame-near-white-window-curtain-5137980/'/>
       </HelpBackground>

        
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
    <HelpPara>It provides the student with the available hostels arou </HelpPara>
          </HelpContent>
          </HelpText>


    </HelpContainer> 
          <Footer/>
      </Container>
      
    )
}
export default Help;
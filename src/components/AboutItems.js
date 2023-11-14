import React from "react";
import styled from "styled-components";

const AboutItemsContainer = styled.div`
background:whitesmoke;
padding-bottom:3em;`


const AboutImage = styled.div`
background-image :url('https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
background-repeat:no-repeat;
background-size:cover;
background-position:center;
height:50vh;`


const AboutHeading = styled.h1`
text-align:center;
color:#CD5888;


@media (max-width: 768px) {
    margin:0 auto;
   font-size:1.5rem;
   justify-content:center;
   margin:.8em;
    }`


const AboutPara = styled.p`
text-align:center;
margin:1.5em;`


const AboutContent = styled.div`
display:flex ;
margin:3e
justify-content:space-around;


@media (max-width: 768px) {
    margin:0 auto;
    flex-direction:column;
    gap:5em;
   align-items:center;
   margin-top:3em;
    }

`



const AboutText = styled.div`
width:25%;
box-shadow:0 0 3px 1px #CD5888;
background:lightGrey;
border-radius:5px;
height:100%;



@media (max-width: 768px) {
  width:70%;
 
    }
`
const AboutItems = () => {
    return (

        <AboutItemsContainer>
            <AboutImage>

            </AboutImage>

            <AboutHeading>WHAT WE DO ?</AboutHeading>
            <AboutPara>Stuhome is an online platform that specializes in student accommodation
                We help students, both in college and university, find an alternative place to stay.</AboutPara>
            <AboutPara>We also provide recommendations and reviews, a way for us to ensure that our users settle for the most affordable,
                secure and comfortable place. </AboutPara>
            <AboutContent>
                <AboutText>
                    <AboutHeading>Our Mission</AboutHeading>
                    <AboutPara>We believe in student living for today and tomorrow</AboutPara>
                    <AboutPara>Because our decision have a lasting impact on both</AboutPara>
                    <AboutPara> universities and collages students by linking them</AboutPara>
                    <AboutPara>to the available hostels around their sorroundings </AboutPara>
                </AboutText>

                <AboutText>
                    <AboutHeading>Our Vision</AboutHeading>
                    <AboutPara>To provide acommodation to collage and university </AboutPara>
                    <AboutPara> students who are in need of hostels nearest location</AboutPara>
                    <AboutPara>they are in.</AboutPara>
                </AboutText>

             
                </AboutContent>
        </AboutItemsContainer>
    )
}
export default AboutItems;       
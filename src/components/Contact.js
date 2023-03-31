import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";
import CallIcon from '@mui/icons-material/Call';
import EmailIcIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Map, GoogleApiWrapperMarker } from 'google-maps-react';
const ContactContainer = styled.div`
background:whitesmoke;
`
const ContactInput = styled.input`
width:200%;
box-shadow:0 0 3px 1px gray;
border:none;
border-radius:5px;
padding:1.5em;`
const Paragraph = styled.p`
margin-right:2em;`

const Paragraph1 = styled.h3`
margin-right:7em;
gap:2em;`
const ContactList = styled.div`
margin-right:30em;
`

const ContactButton = styled.button`
padding:1em;
font-size:1rem;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;
width:28%;
margin-right:35em;
`

const ContactMessage = styled.textarea`
width:200%;
border:grey;
border-radius:5px;
box-shadow:0 0 3px 1px gray;
padding:2em;
border`

const ContactHeading = styled.h2`
margin-right:20em;
`

const Inputs = styled.div`
  display:flex;
flex-direction:column;
 gap:2em;
 margin:0 auto;

 `
const InnerContainer = styled.div`
padding:2em;
text-align:center;
border:2px solid #CD5888;
margin:0 auto;
align-items:center;
 `

const ContactPara = styled.p`
margin-right:30em;`

const ContactDetails = styled.div`
  display:flex;
align-items:center;
margin:3em;

`
const Icons = styled.div`
display:flex;
gap:2em;`
const Icon = styled.div``

const Content = styled.div``
const Contact = () => {
  return (
    <ContactContainer>
      <Nav/>
      <InnerContainer>
        <ContactHeading>Let's Talk!</ContactHeading>
          <ContactPara>Get in touch with us using the contact details  below.</ContactPara>
          <ContactDetails>
       
          <Inputs>
        <ContactInput type="text" placeholder="Username" />
        <ContactInput type="text" placeholder="email" />
        <ContactInput type="number" placeholder="Phone Number"/>
            <ContactInput type="message" placeholder="Subject" ></ContactInput>
            <ContactMessage type="message" placeholder="Your message" ></ContactMessage>

        </Inputs>
    
          <ContactList>
            <Icons>
            <Icon>
          < LocationOnIcon />
              </Icon>
              <Content>
                <Paragraph1>Our Location</Paragraph1>
                <Paragraph>Visit us at our office in Kibera,Nairobi</Paragraph>
                </Content>

            </Icons>

            <Icons>
            <Icon>
              <CallIcon />
              </Icon>
              <Content>

<Paragraph1>Phone Number</Paragraph1>
          <Paragraph>+(254)012345678</Paragraph>
                <Paragraph>+(254)098765432</Paragraph>
                </Content>

          </Icons>

            <Icons>
              <Icon>
              < EmailIcIcon />
              </Icon>
              <Content>

          <Paragraph1>Quick contact</Paragraph1>
          <Paragraph>Email:norahtonny@gmail.com</Paragraph>
                <Paragraph>Stuhome@gmail.com</Paragraph>
                </Content>

            </Icons>
          
        </ContactList>

              </ContactDetails>

      <ContactButton>Submit</ContactButton>
      </InnerContainer>
    

      {/* render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    );
  } */}
          
          <Footer/>
      </ContactContainer>
      
  )
}
export default Contact;
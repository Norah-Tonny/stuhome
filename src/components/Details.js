import { Label } from "@mui/icons-material";
import { Select } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav"
import { db } from "../Firebase";
import { useState } from "react";

import { addDoc, collection } from "firebase/firestore";

import Footer from "./Footer";
const Container = styled.div`;
`

const FormInput = styled.input`
padding: 1em;
width:50%;
border-radius: 5px;
border:none;
box-shadow:0 0 3px 1px gray;
outline:none;`

const Form = styled.div`
display:flex;
flex-direction:column;
gap:3em;
width:30%;
// border:2px solid red;
`

const FormDetails = styled.div`
`

const FormHeading = styled.h1``

const Heading = styled.label``


const Button = styled.button`
padding:1em 2em;
font-size:1rem;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;`


const Details = () => {
    const [details, setDetails] = useState({
       Hostel: "",
       Gender: "",
        Agent: "",
        Pricing: "",
        Requirements: "",
        Anemities: "", 
        Rules: "",
        About:"",
     
    });
 
    
      const [error, setError] = useState({
        Hostel: "",
        Gender: "",
        Agent: "",
        Pricing: "",
        Requirements: "",
        Anemities: "", 
        Rules: "",
        About:"",
        
       
      });
    
  const handleChange = async (e) => {
    e.preventDefault();
        console.log(details)
      
        try {
          if (details.Hostel === "") {
            setError(prev => ({ ...prev, HostelError: "Enter the hostel " }));
          }
          if (details.Gender=== "") {
            setError(prev => ({ ...prev, GenderError: "Enter the gender " }));
          }
          if (details.Agent === "") {
            setError(prev => ({ ...prev, AgentError: "Enter the agent" }));
          }
          if (details.Pricing === "") {
            setError(prev => ({ ...prev, PriceError: "Enter the price" }))
          }
          if (details.Requirements === "") {
            setError(prev => ({ ...prev, RequirementError: "Enter requirements" }))
          }
          if (details.Anemities === "") {
            setError(prev => ({ ...prev,AnemitiesError: "Enter the anemities" }))
          }
          if (details.Rules === "") {
            setError(prev => ({ ...prev,RulesError: "Enter the rules" }))
          }
        
          if (details.About === "") {
            setError(prev => ({ ...prev,RulesError: "Enter your about" }))
          }
    
          else {
    
            await addDoc(collection(db, "hostel"), details);
            setDetails({
                Hostel: "",
               Gender: "",
              Agent: "",
            Price: "",
            });
            
          }
        }
        catch (error)
        {
          console.log(error);
        }
    
  };

 return (
        <Container>
            <Nav />
            

                <Form>
                 <FormHeading>Booking Details.</FormHeading>
                 
                 <FormDetails>
                    <Heading>About the Hostel:</Heading>
                    <FormInput  type='text' placeholder="About the Hostel" onChange={(e) => { setDetails({ ...details, About: e.target.value }) }} />
                 </FormDetails>
                 
                    <FormDetails>
                    <Heading>Hostel:</Heading>
                    <FormInput  type='text' placeholder="Hostel Name" onChange={(e) => { setDetails({ ...details, Hostel: e.target.value }) }} />
                </FormDetails>

                <FormDetails>
                    <Heading>Gender:</Heading>
                        <FormInput type='text' placeholder="Gender Type" onChange={(e) => { setDetails({ ...details, Gender: e.target.value }) }} />
                        </FormDetails>

                    <FormDetails>
                    <Heading>Agent/LandLord:</Heading>   
                    <FormInput type='text' placeholder="Agent Name" onChange={(e) => { setDetails({ ...details,Agent: e.target.value }) }} />
                 </FormDetails>

                     <FormDetails>
                    <Heading>Pricing:</Heading>
                    <FormInput type='number' placeholder="Maximum price"  onChange={(e) => { setDetails({ ...details,Price: e.target.value }) }}/>
                 </FormDetails>
                 

                 <FormDetails>
                    <Heading>Requriements:</Heading>
                    <FormInput  type='text' placeholder="Requirements" onChange={(e) => { setDetails({ ...details, Requirements: e.target.value }) }} />
                 </FormDetails>
                 
                 <FormDetails>
                    <Heading>Anemities:</Heading>
                    <FormInput  type='text' placeholder="Anemities" onChange={(e) => { setDetails({ ...details, Anemities: e.target.value }) }} />
                 </FormDetails>
                 <FormDetails>
                     
                    <Heading>House Rules:</Heading>
                    <FormInput  type='text' placeholder="House Rules" onChange={(e) => { setDetails({ ...details,Rules: e.target.value }) }} />
                </FormDetails>
                
                <Button onClick={(e)=>handleChange(e)}>Book</Button>
              
                </Form>

            <Footer />
            
    </Container>
    )
}
export default Details;
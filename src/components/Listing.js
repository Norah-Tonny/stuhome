import { Label } from "@mui/icons-material";
import { Select } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Nav from "./Nav"
import { Context } from "../State";
import { db } from "../Firebase";
import { ref, uploadString, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../Firebase";

import Footer from "./Footer";
import userEvent from "@testing-library/user-event";
const Container = styled.div`
background:whitesmoke;

`
const TextInput = styled.input`
padding: 1.5em;
width:50%;
border-radius: 5px;
border:none;
box-shadow:0 0 3px 1px gray;
outline:none;`

const FormInput = styled.input`
padding: 1.5em;
width:50%;
border-radius: 5px;
border:none;
box-shadow:0 0 3px 1px gray;
outline:none;`

const Form = styled.div`
margin:0 auto;
align-items:center;
text-align:center;
display:flex;
flex-direction:column;
padding:5em;
gap:2em;
width:50%;
// border:2px solid red;
`

const TextArea = styled.textarea`
padding: 1em;
width:50%;
border-radius: 5px;
border:none;
box-shadow:0 0 3px 1px gray;
outline:none;`

const FormHeading = styled.h1`
`

const Paragraph = styled.label`
margin:.5m;
`


const Button = styled.button`
padding:1em 2em;
font-size:1rem;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;`


const Listing = () => {
  const { hostelState, docIdState, itemState, itemIdState, loaderState, userState } = useContext(Context)
  const [user, setUser] = userState;
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState({
    Hostel: "",
    Image: "",
    Position: "",
    Agent: "",
    Pricing: "",
    Location:"",
    Requirements: "",
    Anemities: "",
    Rules: "",
    About: ""

  });

console.log(user)
  const [error, setError] = useState({
    Hostel: "",
    Image: "",
   Position: "",
    Agent: "",
    Pricing: "",
    Location:"",
    Requirements: "",
    Anemities: "",
    Rules: "",
    About: ""


  });

  const listingSubmit = async (e) => {
    e.preventDefault();
    setDetails(prev=>({...prev, uid:user.uid}))
    console.log(details)

    try {
      if (details.Hostel === "") {
       return setError(prev => ({ ...prev, HostelError: "Enter the hostel " }));
      }

      if (details.Image === "") {
        return setError(prev => ({ ...prev, ImageError: "Enter the image" }));
      }

      if (details.Position=== "") {
        return setError(prev => ({ ...prev,PositionError: "Enter house position " }));
      }
      if (details.Agent === "") {
        return setError(prev => ({ ...prev, AgentError: "Enter the agent" }));
      }
      if (details.Pricing === "") {
        return setError(prev => ({ ...prev, PricingError: "Enter the price" }))
      }


      if (details.Location === "") {
        return setError(prev => ({ ...prev, LocationError: "Enter the location" }));
      }


      if (details.Requirements === "") {
        return setError(prev => ({ ...prev, RequirementError: "Enter requirements" }))
      }
      if (details.Anemities === "") {
        return setError(prev => ({ ...prev, AnemitiesError: "Enter the anemities" }))
      }
      if (details.Rules === "") {
        return setError(prev => ({ ...prev, RulesError: "Enter the rules" }))
      }

      if (details.About === "") {
       return setError(prev => ({ ...prev, AboutError: "Enter your about" }))
      }

      

        await addDoc(collection(db, "hostel"), details);
        console.log('Hostel added successfully')
        setDetails({
          Hostel: "",
          Image: "",
         Positon: "",
          Agent: "",
          Pricing: "",
          Location: "",
          Requirements: "",
          Anemities: "",
          Rules: "",
          About: ""

        });

      
    }
    catch (error) {
      console.log(error);
    }
    console.log(details)

  };

  const uploadFile = (e) => {
    const file = e.target.files[0]
console.log(file.name)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);

      // Data URL string
      const storageRef = ref(storage, `hostels/${file.name}`);

      const fileData = reader.result;
      uploadString(storageRef, fileData, 'data_url').then((snapshot) => {
        console.log('Uploaded a data_url string!');
        setDetails(prev=>({ ...prev, Image: `https://firebasestorage.googleapis.com/v0/b/stuhome-fbd53.appspot.com/o/hostels%2F${file.name}?alt=media` }));
    
      });

   };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };

  }

  return (

    <Container>
      <Nav />
      <Form>
        {console.log(user.uid)}
        <FormHeading>Listing</FormHeading>

        <TextInput type='text' value={details.Hostel} placeholder="Hostel Name" onChange={(e) => { setDetails({ ...details, Hostel: e.target.value }) }} />
           
        <TextArea type="Text" value={details.About}  placeholder="About the Hostel"onChange={(e) => { setDetails({ ...details, About: e.target.value }) }}/> 
        
        <Paragraph>Upload Image</Paragraph>
                  
        <FormInput type='file' value={details.file}  placeholder="Image" onChange={(e) => uploadFile(e)} />

            <TextArea type='text' value={details.Position}  placeholder="House Position" onChange={(e) => { setDetails({ ...details, Position: e.target.value }) }} />
          
            <TextArea type='text' value={details.Agent}  placeholder="Agent Name" onChange={(e) => { setDetails({ ...details, Agent: e.target.value }) }} />

            <TextArea type='text' value={details.Location}  placeholder="Location" onChange={(e) => { setDetails({ ...details, Location : e.target.value }) }} />

            <FormInput type='number' value={details.Pricing} placeholder="Rent" onChange={(e) => { setDetails({ ...details,Pricing: e.target.value }) }} />
     
            <TextArea type='text' value={details.Requirements}  placeholder="Requirements" onChange={(e) => { setDetails({ ...details, Requirements: e.target.value }) }} />
    
              <TextArea type='text' value={details.Anemities}  placeholder="Anemities" onChange={(e) => { setDetails({ ...details, Anemities: e.target.value }) }} />
  
            <TextArea type='text' value={details.Rules}  placeholder="House Rules" onChange={(e) => { setDetails({ ...details, Rules: e.target.value }) }} />
      
        <Button onClick={(e) => listingSubmit(e)}>Post</Button>

      </Form>
     
      <Footer />

    </Container>
  )
}
export default Listing;



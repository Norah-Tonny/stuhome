import { Select } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav"
import Footer from "./Footer";
const ListingContainer = styled.div`
margin:3em 3em;`

const ListingInput = styled.input`
padding: 2em;
width:30%;
border-radius: 5px;
border:none;
box-shadow:0 0 3px 1px gray;
outline:none;`

const SelectOption = styled.option`

`
const ListingInput1 = styled.input`
border:none;
`


const Selected = styled.div``
const List =styled.div``

const Inputs = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:3em 3em;
gap:2em;`

const ListLeft=styled.div``

const ListingButton = styled.button`
padding:1em 2em;
font-size:1rem;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;`

const Listing = () => {
    return (
        <ListingContainer>
            <Nav />
            <Listing>

<ListLeft></ListLeft>

            <Inputs>
                <List>
                <ListingInput1 type='text' placeholder="Location" />
                <Select>
                    <SelectOption>Nairobi</SelectOption>
                    <SelectOption>Kisumu</SelectOption>
                    <SelectOption>Mombasa</SelectOption>
                    <SelectOption>Siaya</SelectOption>
                    <SelectOption>Kilifi</SelectOption>
                    <SelectOption>Kakamega</SelectOption>
                    <SelectOption>Moyale</SelectOption>
                    <SelectOption>Turkana</SelectOption>
                 <SelectOption>Nakuru</SelectOption>
                </Select>
                </List>

            <ListingInput type='text' placeholder="Hostel type"/>
            <ListingInput type='text' placeholder="Maximum price" />
            <ListingInput type='text' placeholder=""/>
                <ListingButton>Search</ListingButton>
                </Inputs>
                </Listing>
            <Footer />
            
    </ListingContainer>
    )
}
export default Listing;
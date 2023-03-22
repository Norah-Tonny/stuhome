import Nav from "./Nav";
import Footer from "./Footer";
import React, { useEffect, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "../Firebase";
import { Link, Router } from "react-router-dom";
import { Context } from "../State";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Container = styled.div`
`;

const ViewContainer = styled.div`
  display: flex;
  flex: column;
  gap: 5em;
  padding: 3em;
  justify-content: space-around;
  margin: 0 auto;
`;
const Button = styled.button`
  padding: 1em;
  font-size: 1rem;
  width: 100%;
  curser: pointer;
  background: #cd5888;
  border-radius: 5px;
  border: none;
`;


const Buttons = styled.button`
  padding: 1em 2em;
  font-size: 1rem;
  width: 100%;
  curser: pointer;
  border-radius: 5px;
  border: 2px solid #cd5888;
`;

const ViewText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  font-size: 1.1em;
`;

const BookButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

const Hostels = styled.div`
  display:flex;
  justify-content:space-between;
  border-radius: 5px;
  gap:5em;
  padding: 3em;
`;
const Hostel = styled.div`
display:flex;
flex-direction:row;
`;



const HelpDetails = styled.div``;

const Image = styled.img`
  height: 60vh;
  width: 60wh;
`;
const Heading = styled.h3`
  text-align: center;
`;
const Content = styled.div`
  background: #fff;
`;
const ImageContainer = styled.div``
const DashboardContent = styled.div`
border: 2px solid lightGrey;
border0-radius:5px;
width: 30vw;
padding: 3em;`

const Paragraph1 = styled.p`
  font-size: 1.2em;
`;

const Paragraph2 = styled.p`
  font-size: 1.2em;
`;

const Dashboard = () => {
  const {
    itemState,
    hostelState,
    docIdState,
    itemIdState,
    deleteState,
    userState,
  } = useContext(Context);
  const [hostels, setHostels] = hostelState;
  const [itemId, setItemId] = itemIdState;
  const [docId, setDocId] = docIdState;
  const [item, setItem] = itemState;

  const [user, setUser] = userState;

  let newHostel = [];


  const { id } = useParams();

  useEffect(() => {
    setItemId(id);
  }, []);
  console.log(hostels)

  const unique = hostels.filter((obj, index) => {
    return index === hostels.findIndex(o => obj.About === o.About);
  });

  
  
  return (
    <Container>
    
      {!user ? (
        <Navigate to="/login" replace />
      ) : (
        <>
          <Nav />
          <ViewContainer>
              <Content>
              {unique.map(
                (hostel, index) => {
                  if (user.uid === hostel.uid) {

                    return (
                      <Hostels id="Hostel" key={index}>
                        
                        <ImageContainer>
                          <Image src={hostel.Image} />
                          </ImageContainer>
  
                    
                     <DashboardContent>
                          <Paragraph>Hostel:{item && item.Hostel}</Paragraph>
                          <Paragraph>About the hostel:{item && item.About}</Paragraph>
                          <Paragraph>Location:{hostel.Location}</Paragraph>
                          <Paragraph>Ksh.{hostel.Pricing}</Paragraph>
                          <Paragraph>Position:{item && item.Position}</Paragraph>
                          <Paragraph>Agent:{item && item.Agent}</Paragraph>
                          <Paragraph>Location:Gender{item && item.Location}</Paragraph>
                          <Paragraph>Requirements:{item && item.Requirements}</Paragraph>
                          <Paragraph>Anemities:{item && item.Anemities}</Paragraph>
                          <Paragraph>Rules:{item && item.Rules}</Paragraph>
      
                          <BookButtons>
      
                            <Link to='/listing'>  <Buttons >Update</Buttons></Link>
      
                            <Link to='/listing'> <Buttons>Delete</Buttons></Link>

                            <Link to=""> <Button>Cancel</Button></Link>

                          </BookButtons>
                        </DashboardContent>
                        


                        </Hostels>
                    );
                 
                    
                    
                  }

                
                }

               
              )}
            </Content>
          </ViewContainer>

          <Footer />
        </>
      )}
    </Container>
  );
};
export default Dashboard;


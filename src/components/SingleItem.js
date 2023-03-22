import Nav from "./Nav";
import Footer from "./Footer";
import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Context } from "../State";
import { useParams } from "react-router-dom";
import BookingModal from "./BookingModal";
import ScheduleModal from "./ScheduleModal";
import ReviewModal from "./ReviewModal";

const Container = styled.div``;

const ViewContainer = styled.div`
  display: flex;
  flex: row;
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
  border: 2px solid lightGrey;
  border-radius: 5px;
  width: 30vw;
  padding: 3em;
`;
const Hostel = styled.div``;
const HelpDetails = styled.div``;

const Image = styled.img`
  height: 70vh;
  width: 70wh;
`;
const Heading = styled.h3`
  text-align: center;
`;
const Content = styled.div`
  background: #fff;
`;

const PriceItem = styled.div`
  display: flex;
  flex-direction: row;
`;
const Paragraph1 = styled.p`
  font-size: 1.2em;
`;


const Paragraph2 = styled.p`
  font-size: 1.2em;
`;

const Loader = styled.img`
  display: block;
  margin: 0 auto;
`;

const SingleItem = () => {
  const { itemState, hostelState, docIdState, itemIdState, loaderState } =
    useContext(Context);
  const [hostels, setHostels] = hostelState;
  const [itemId, setItemId] = itemIdState;
  const [docId, setDocId] = docIdState;
  const [item, setItem] = itemState;
  const [loader, setLoader] = loaderState;
  const [isOpen, setIsOpen] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [openSchedule, setOpenSchedule] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setItemId(id);
  }, []);

  console.log(itemId);

  return (
    <Container>
      {isOpen && <BookingModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      {openSchedule && (
        <ScheduleModal
          openSchedule={openSchedule}
          setOpenSchedule={setOpenSchedule}
        />
      )}
      {openReview && (
        <ReviewModal openReview={openReview} setOpenReview={setOpenReview} />
      )}
      <Nav />
      {loader && <Loader src="/loaders/loader.gif" />}
      <ViewContainer>
        <HelpDetails>
          <ViewText>
            <Hostel id="Hostel">
              <Image src={item && item.Image} />
            </Hostel>
          </ViewText>
        </HelpDetails>

        <Content>
          <ViewText>
            <Hostels id="Hostel">
              <Heading>Booking Details</Heading>

              <Paragraph>Hostel:{item && item.Hostel}</Paragraph>
              <Paragraph>Position:{item && item.Position}</Paragraph>
              <Paragraph>Agent:{item && item.Agent}</Paragraph>
              <Paragraph>About the hostel:{item && item.About}</Paragraph>
              <PriceItem>

                <Paragraph2>Price:</Paragraph2>
                <Paragraph1>Ksh.{item && item.Pricing}</Paragraph1>

              </PriceItem>
              <Paragraph>Location:Gender{item && item.Location}</Paragraph>
              <Paragraph>Requirements:{item && item.Requirements}</Paragraph>
              <Paragraph>Anemities:{item && item.Anemities}</Paragraph>
              <Paragraph>Rules:{item && item.Rules}</Paragraph>

              <BookButtons>
                <Button onClick={() => setIsOpen(true)}>Book</Button>

                <Buttons onClick={() => setOpenSchedule(true)}>
                  Schedule a visit
                </Buttons>

                <Buttons onClick={() => setOpenReview(true)}>
                  Post review
                </Buttons>
              </BookButtons>
            </Hostels>
          </ViewText>
        </Content>
      </ViewContainer>

      <Footer />
    </Container>
  );
};
export default SingleItem;

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
                {/* {console.log(unique)} */}
              {unique.map(
                (hostel, index) => {
                  // return()
                  if (user.uid === hostel.uid) {
                    // console.log(hostel)

                    return (
                        <Hostels id="Hostel" key={index}>
      
                          <Image src={hostel.Image} />
                          <Paragraph>Location:{hostel.Location}</Paragraph>
                          <Paragraph>Ksh.{hostel.Pricing}</Paragraph>
                          <Link to={`hostel/${docId[index]}`}><Button >View</Button></Link>
                          <Heading>Booking Details</Heading>
      
                          <Paragraph>Hostel:{item && item.Hostel}</Paragraph>
                          <Paragraph>Gender:{item && item.Gender}</Paragraph>
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
      
                            <Link to='/listing'>  <Buttons >Update</Buttons></Link>
      
                            <Link to='/listing'> <Buttons>Delete</Buttons></Link>
                          </BookButtons>
                        </Hostels>
                      );
                    
                    
                  }

                
                }

               
              )}
            </Content>
          </ViewContainer>

          {/* <h1>This is the Dashboard page</h1> */}
          <Footer />
        </>
      )}
    </Container>
  );
};
export default Dashboard;

// import React, { useEffect, useState, useContext } from "react";
// import styled from "styled-components";
// import { Context } from "../State";
// import { Link } from "react-router-dom";

// const Container = styled.div``

// const Heading = styled.h1`
// text-align:center;
// padding:2rem;
// font-weight:bold;
// font-size:2rem;
// font-weight:bold;
// color:#CD5888;
// `

// const HomeContainer = styled.div`
// `
// const Homepara = styled.h1`
// text-transform:uppercase;
// color:#CD5888;
// text-align:center;
//  padding-top:13rem;
// font-weight:bold;
// font-size:3rem;

// `
// const HomeCover = styled.div`
// background-image :linear-gradient(rgb(0,0,0,0.6),rgb(0,0,0,0.6)),url('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
// background-repeat:no-repeat;
// background-size:cover;
// background-position:center;
// height:60vh;
// width:60wh;
// padding-top:3em;
// `
// const HomeMap = styled.div`
// display:flex;
//  flex-direction:row;
//  gap:5em;
//  width:60%;
// align-itmes:center;
// flex-wrap:wrap;
// margin:0 auto;

// `

// const Paragraph = styled.p`
// font-size:1rem;
// font-weight:bold;`

// const HomeButton = styled.button``

// const Hostels = styled.div`
// width:20%;
// border:none;

// `

// const Image = styled.img`
// height:30vh;
// width:30wh;
// `

// const Loader = styled.img`
// display:block;
// margin:0 auto;
// `

// const Button = styled.button`
// padding:1em 2em;
// font-size:1rem;
// curser:pointer;
// background:#CD5888;
// border-radius:5px;
// border:none;`

// const Dashboard = () => {
//     const { itemState, hostelState, docIdState, loaderState } = useContext(Context)
//     const [hostels, setHostels] = hostelState
//     const [isOpen, setIsOpen] = useState(false);
//     const [docId, setDocId] = docIdState;
//     const [loader, setLoader] = loaderState

//     useEffect(() => {

//     }, [])

//     console.log(hostels)

//   return (
//       <div>

//     <Container>

//       <HomeCover>
//         <Homepara>Host your hostel with stuhome</Homepara>
//         {console.log(hostels)}
//       </HomeCover>

//       <HomeContainer>
//         <Heading>Featured Hostel</Heading>
//         {loader && <Loader src="/loaders/loader.gif" />}

//         <HomeMap>
//           {hostels.map((hostel, index) => {
//             return (
//               <Hostels id="Hostel" key={index}>

//                 <Image src={hostel.Image} />
//                 <Paragraph>Location:{hostel.Location}</Paragraph>
//                 <Paragraph>Ksh.{hostel.Pricing}</Paragraph>
//                     <Link to={`hostel/${docId[index]}`}><Button >View</Button></Link>
//                     {/* <Link to={`hostel/${docId[index]}`}><Button >Update</Button></Link>
//                     <Link to={`hostel/${docId[index]}`}><Button >Delete</Button></Link> */}

//               </Hostels>
//             );
//           })}

//         </HomeMap>

//       </HomeContainer>
//     </Container>

//     </div>
//   )
// }

// export default Dashboard

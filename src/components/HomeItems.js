import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

// import ReactModal from 'react-modal';
import { Context } from "../State";
import { Link } from "react-router-dom";
// import spinner from './spinner. gif'; 
const Container = styled.div``

const Heading = styled.h1`
text-align:center;
padding:2rem;
font-weight:bold;
font-size:2rem;
font-weight:bold;
color:#CD5888;
`

const HomeContainer = styled.div`
// background:red;
// display:flex;
// flex-direction:row
;`

const Homepara = styled.h1`
text-transform:uppercase;
color:#CD5888;
text-align:center;
font-weight:bold;
font-size:3rem;
margin:0 auto;
margin-top:3.5em;
@media (max-width: 768px) {
font-size:2rem;
text-align:center;
}

`
const HomeCover = styled.div`
background-image :linear-gradient(rgb(0,0,0,0.6),rgb(0,0,0,0.6)),url('https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
background-repeat:no-repeat;
background-size:cover;
background-position:center;
height:60vh;
width:60wh;
padding-top:3em;

`
const HomeMap = styled.div`
display:flex;
 flex-direction:row;
 gap:5em;
 width:60%;
align-itmes:center;
flex-wrap:wrap;
margin:0 auto;
justify-content:space-between;
padding-bottom:2em;
@media (max-width: 768px) {
  margin:0 auto;
  flex-direction:column;
 

 
  }

`

const Paragraph = styled.p`
font-size:1rem;
font-weight:bold;`

const HomeButton = styled.button``

const Hostels = styled.div`
width:20%;
border:none;


`

const Image = styled.img`
height:30vh;
width:30wh;
`

const Loader = styled.img`
display:block;
margin:0 auto;
`

const Button = styled.button`
padding:1em 2em;
font-size:1rem;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;`

const HomeItems = () => {
  const { itemState, hostelState, docIdState, loaderState } = useContext(Context)
  const [hostels, setHostels] = hostelState
  const [isOpen, setIsOpen] = useState(false);
  const [docId, setDocId] = docIdState;
  const [loader, setLoader] = loaderState

    //   useEffect(() => {
    //     (async () => {
    //         // setLoader(true)
    //         const querySnapshot = await getDocs(collection(db, "hostel"));
    //         querySnapshot.forEach((doc) => {
    //             setHostels(prev => ([...prev, doc.data()]))
    //             setDocId(prev => [...prev, doc.id])

    //             // console.log(doc.id)

    //         });
    //         // setLoader(false)
    //     }
    //     )()


    // }, [])

  

  // console.log(hostels)

  return (
    <Container>

      <HomeCover>
        <Homepara>Host your hostel with stuhome</Homepara>
        {console.log(hostels)}
      </HomeCover>

      <HomeContainer>
        <Heading>Featured Hostel</Heading>
        {loader && <Loader src="/loaders/loader.gif" />}

        <HomeMap>
          {hostels.map((hostel, index) => {
            return (
              <Hostels id="Hostel" key={index}>

                <Image src={hostel.Image} />
                <Paragraph>Location:{hostel.Location}</Paragraph>
                <Paragraph>Ksh.{hostel.Pricing}</Paragraph>
                <Link to={`hostel/${docId[index]}`}><Button >View</Button></Link>
              </Hostels>
            );
          })}

        </HomeMap>

      </HomeContainer>
    </Container>
  )

}
export default HomeItems;
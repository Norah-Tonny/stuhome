import { Link } from "react-router-dom"
import styled from "styled-components"
import React, { useEffect, useState, useContext } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Context } from "../State";
import { useParams } from "react-router-dom";

const NavContainer = styled.div`
background:#CD5888;
height:15vh;
`
const InnerNav = styled.div`
margin:0 auto;
width:70%;  
display:flex;
justify-content:space-between;
`

const NavUl = styled.ul`
display:flex;
gap:2em;
font-weight:bold;
list-style-type:none;
margin-top:4em;
`

const NavList = styled.li`
font-size:1rem;
color:black;
font-weight:bold;`


const Logo = styled.h1`
padding-left:.5em;
font-weight:bold;
font-size:1.5rem;
`

const LogoContainer = styled.div`
width:160px;
height:160px;
border-radius:50%;
margin-top:4em;
`

const Button = styled.button`
padding:.5em 1em;
font-size:1rem;
curser:pointer;
border:2px solid #CD5888;
background:whitesmoke;
border-radius:5px;

`


const NavRight = styled.div``

const NavLeft = styled.div``

const Nav = () => {

    const { hostelState, docIdState, itemState, itemIdState, loaderState } = useContext(Context)
    const [hostels, setHostels] = hostelState
    const [itemId, setItemId] = itemIdState
    const [docId, setDocId] = docIdState
    const [item, setItem] = itemState
    const [loader, setLoader] = loaderState


    useEffect(() => {
        (async () => {
            setLoader(true)
            const querySnapshot = await getDocs(collection(db, "hostel"));
            querySnapshot.forEach((doc) => {
                setHostels(prev => ([...prev, doc.data()]))
                setDocId(prev => [...prev, doc.id])

                console.log(doc.id)

            });
            setLoader(false)
        }
        )()


    }, [])

    useEffect(() => {

        const itemIndex = docId.indexOf(itemId)
        console.log(docId)
        setItem(hostels[itemIndex])
    }, [docId])




    const [isOpen, setIsOpen] = useState(false)
    return (
        <NavContainer>
            <InnerNav>
                {console.log(docId)}

                <NavLeft>
                    <LogoContainer>

                        <Logo><Link to="/">Stuhome</Link> </Logo>



                    </LogoContainer>
                </NavLeft>

                <NavRight>

                    <NavUl>
                        <NavList> <Link to="/listing">Listing</Link></NavList>
                        <NavList> <Link to="/login">Login</Link></NavList>
                        <NavList><Link to="/signup">SignUp</Link> </NavList>
                        <NavList><Link to="/help">Help</Link> </NavList>

                        <NavList>
                            <Link to="/Listing"> <Button onClick={() => setIsOpen(true)}>Add Listing</Button></Link>

                        </NavList>

                    </NavUl>
                </NavRight>


            </InnerNav>

        </NavContainer>
    )
}
export default Nav;
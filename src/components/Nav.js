import { Link } from "react-router-dom"
import styled from "styled-components"
import React, { useEffect, useState, useContext } from "react";
import { addDoc, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Context } from "../State";
import { Navigate } from "react-router-dom";
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
@media (max-width: 768px) {
    display:none;
  }
`

const NavList = styled.li`
font-size:1rem;
color:black;
gap:3em;
font-weight:bold;`

const NavList1 = styled.li`
font-size:1rem;
color:black;
font-weight:bold;
display:flex;
gap:3em;
flex-direction:row;

`

const Logo = styled.h1`
padding-left:.5em;
font-weight:bold;
font-size:1.5rem;
@media (max-width: 768px) {
    text-align:center;
    margin:0 auto;
    }

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

    const { hostelState, docIdState, itemState, itemIdState, loaderState, userState, detailsState, userOn } = useContext(Context)
    const [hostels, setHostels] = hostelState
    const [user, setUser] = userState
    const [itemId, setItemId] = itemIdState
    const [docId, setDocId] = docIdState
    const [item, setItem] = itemState
    const [loader, setLoader] = loaderState
    const [details, setDetails] = detailsState
    const [isLoggedIn, setIsLoggedIn] = userOn
  

    console.log(hostels)
    useEffect(() => {
        (async () => {
            setLoader(true)
            const querySnapshot = await getDocs(collection(db, "hostel"));
            querySnapshot.forEach((doc) => {
                setHostels(prev => ([...prev, doc.data()]))
                setDocId(prev => [...prev, doc.id])

    

            });
            setLoader(false)
        }
        )()

    }, [])


    useEffect(() => {

        const itemIndex = docId.indexOf(itemId)
     
        setItem(hostels[itemIndex])
    }, [docId])

    useEffect(() => {

        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        console.log(loggedInUser)

        if (loggedInUser) {

            setDetails(prev => ({ ...prev, uid: loggedInUser.uid }))

        }

        if (loggedInUser) {
            (async () => {
                const docRef = doc(db, "users", loggedInUser.email);
                const docSnap = await getDoc(docRef);
                console.log(docSnap)

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    setUser(docSnap.data())

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }
            )()

            console.log(loggedInUser.email)

        }


    }, [])


    const [isOpen, setIsOpen] = useState(false)
    return (

        <NavContainer>

            <InnerNav>

                <NavLeft>
                    <LogoContainer>

                        <Logo><Link to="/">Stuhome</Link> </Logo>

                    </LogoContainer>
                </NavLeft>

              

                {
                    isLoggedIn && user.select == "Landloard" && <NavRight>
                        <NavUl className="nav-items">


                            <NavList1>
                                <Link to="/dashboard"> <NavList>Dashboard</NavList></Link>
                                <Link to="/Listing"> <Button onClick={() => setIsOpen(true)} >Add Listing</Button></Link>
                                <Link to="/logout"><Button onClick={() => setIsLoggedIn(false)}>Log out</Button></Link>

                            </NavList1>

                        </NavUl>
                    </NavRight>

                }

                {console.log(user.select)}

                {(isLoggedIn && user.select == "Student") &&
                    <NavRight>
                        {console.log(user.select)}
                        <NavUl>
                            <NavList1>
                                <Link to="/dashboard"> <NavList>Dashboard</NavList></Link>
                                <Link to="/Listing"> <Button onClick={() => setIsOpen(true)} >Stude</Button></Link>
                                <Link to="/logout"><Button onClick={() => setIsLoggedIn(false)}>Log out</Button></Link>

                            </NavList1>
                        </NavUl>
                    </NavRight>
                }

                {
                    !isLoggedIn && <NavUl>
                        <NavList> <Link to="/login">Login</Link></NavList>
                        <NavList><Link to="/signup">SignUp</Link> </NavList>
                        <NavList><Link to="/help">Help</Link> </NavList>
                    </NavUl>
                }


            </InnerNav >

        </NavContainer >
    )
}
export default Nav;
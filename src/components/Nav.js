
import { Link } from "react-router-dom"
import styled from "styled-components"


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



const NavRight = styled.div``

const NavLeft = styled.div``

const Nav = () => {
    return (
        <NavContainer>
            <InnerNav>
                <NavLeft>
                    <LogoContainer>

                    <Logo><Link to="/">Stuhome</Link> </Logo>



                        </LogoContainer>
            </NavLeft>
          

                <NavRight>
                    <NavUl>
<NavList> <Link to="/listing">Listing</Link></NavList>
  <NavList> <Link to="/login">Login</Link></NavList>
     <NavList><Link to="/singup">SignUp</Link> </NavList>
     <NavList><Link to="/help">Help</Link> </NavList>

                    </NavUl>
            </NavRight>
            

            </InnerNav>

        </NavContainer>
    )
}
export default Nav;
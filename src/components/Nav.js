
import { Link } from "react-router-dom"
import styled from "styled-components"


const NavContainer = styled.div`
background:#CD5888;
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
font-size:2rem;
list-style-type:none;
`

const NavList = styled.li`
font-size:1.5rem;
color:black;
font-weight:bold;`


const Logo = styled.h1`
padding-left:1em;
`

const LogoContainer = styled.div`
width:160px;
height:160px;
border-radius:50%;
box-shadow:1px 1px 6px skyBue;
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
<NavList> <Link to="/login">Listing</Link></NavList>
  <NavList> <Link to="/register">Login</Link></NavList>
     <NavList><Link to="/preview">SignUp</Link> </NavList>
     <NavList><Link to="/preview">Help</Link> </NavList>

                        <NavList>
                             </NavList>
                    </NavUl>
            </NavRight>
            

            </InnerNav>

        </NavContainer>
    )
}
export default Nav;
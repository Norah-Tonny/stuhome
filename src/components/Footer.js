import { Link } from "react-router-dom"
import styled from "styled-components"

const FooterContainer = styled.div`
background:#CD5888;
display:flex;
justify-content:space-between;
padding:2em;
`
const FooterUl = styled.ul`

jusify_content:space-around; 
`
const FooterList = styled.li`
list-style-type:none;
font-size:1rem;
font-weight:bold;

`
const ContactText = styled.div`
color:blue;
font-size:1rem;
font-weight:bold;`

const FooterHeading = styled.h1`
font-size:1.5rem;
font-weight:bold;`

const Container = styled.div`
width:160px;
height:160px;
border-radius:50%;

`
const FooterLogo=styled.div``

const MaterianUl=styled.div`
display:flex;
flex-direction:column;
gap:3em;

`
const Logo = styled.h1`
text-align:center;
`

const FooterPara = styled.p`
font-size:1rem;
font-weight:bold;`

const FooterLink=styled.div``


const Footer = () => {
    return (
      <FooterContainer>
     
            <FooterUl>
                <Logo className="fontFamily"><Link to="/">Stuhome</Link> </Logo>
                
        <FooterLink>About</FooterLink>
        <FooterLink>Contact</FooterLink>
                

      </FooterUl>

      <FooterUl>
      <FooterHeading>
     Information
       </FooterHeading>
        <FooterLink>Host your stuhome</FooterLink>
        <FooterLink>Instant Mockups</FooterLink>
     
            </FooterUl>

            <FooterUl>
      <FooterHeading>
    Legals
       </FooterHeading>
        <FooterLink>Terms</FooterLink>
        <FooterLink>Privacy</FooterLink>
        <FooterLink>FeedBack and Complaints</FooterLink>
            </FooterUl>
            
            
      <FooterUl>

      <FooterHeading>
       Connect with us
          </FooterHeading>
      </FooterUl>
     
    </FooterContainer>
  
    )
}
export default Footer; 
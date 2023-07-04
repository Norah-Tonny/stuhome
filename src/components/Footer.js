import { Link } from "react-router-dom"
import styled from "styled-components"
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterContainer = styled.div`
background:#CD5888;
display:flex;
justify-content:space-between;
padding:2em;
@media (max-width: 768px) {
  width:88%;
  flex-direction:column;
  text-align:center;

  }

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

const Logo = styled.h1`
text-align:center;
font-size:1.5em;

@media (max-width: 768px) {
  width:100%;
  text-align:center;
  }

`

const FooterPara = styled.p`
font-size:1rem;
font-weight:bold;`

const FooterLink = styled.li`
list-style-type:none;
margin:1em 0;
font-size:1rem;`


const Footer = () => {
  return (
    <FooterContainer>

      <FooterUl>
        <Logo className="fontFamily"><Link to="/">Stuhome</Link> </Logo>

        <Link to='/about'><FooterLink>About</FooterLink></Link>
        <Link to='/contact'> <FooterLink>Contact</FooterLink></Link>
        {/* <Link  to ='/`Dashboard1'><Footer>Dashboard1</Footer></Link> */}
`
      </FooterUl>

      <FooterUl>
        <FooterHeading>
          Information
        </FooterHeading>
        <FooterLink to='/'>Host your stuhome</FooterLink>
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
        <FooterLink>< CallIcon />+24547123456789</FooterLink>
        <Link href='email'> <FooterLink>< EmailIcon />info@Stuhome.com </FooterLink></Link>
        <FooterLink><  LocationOnIcon />Kibra-Myc Feepals Area of Kibra </FooterLink>

      </FooterUl>

    </FooterContainer>

  )
}
export default Footer; 
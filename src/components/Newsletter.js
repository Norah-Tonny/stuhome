
import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';
import {useState } from "react";

const NewsletterContainer = styled.div`
text-align:center;
background-color:silver;
@media (max-width: 768px) {
    width:100%;
margin-bottom:2em;
   
  
    }
  
`
const NewsletterHeading = styled.h2`
font-size:1.5em;
font-weight:bold;
color:#CD5888;;
margin:.5em;
@media (max-width: 768px) {
    width:100%;
    font-size:1rem;

  
    }
`
const NewsletterParagraph = styled.p`
font-size:1.2rem;
margin:.5em;

@media (max-width: 768px) {
    width:100%;
    font-size:1rem;
  
    }
  
`
const NewsletterEmail = styled.input`
padding:0 2em;
border-radius:6px;
border:3px solid silver;
color:#CD5888;
`
const NewsletterBUtton = styled.button`
 padding:.3em 2em;
background:lightGrey;
cursor:pointer;
border-radius:6px;
color:#CD5888;;
`
const NewsletterEmailButton = styled.div`
display:flex;
justify-content:center;
gap:1em;
margin:1em;
`
const Newsletter = () => {

    const [subscription, setSubscription] = useState({
        email: "",
        
    } )


    return (
        <NewsletterContainer>

            <NewsletterHeading>Subscribe to our Newsletter</NewsletterHeading>
            <NewsletterParagraph>Subscribe to our newsletter for upload of new hostels</NewsletterParagraph>
            
            <NewsletterEmailButton>
                <NewsletterEmail type="email" placeholder="Email address" />
                
                <NewsletterBUtton>{<SendIcon />}</NewsletterBUtton>

            </NewsletterEmailButton>
        </NewsletterContainer>
    )
}
export default Newsletter;
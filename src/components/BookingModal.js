import styled from "styled-components";
import { json, Link } from "react-router-dom";
import { useState } from "react";

const Button = styled.button`
padding:1em 1em ;
font-size:1rem;
width:315%;
curser:pointer;
background:#CD5888;
border-radius:5px;
border:none;
margin:0 auto;
`

const Buttons = styled.button`
padding:1em;
font-size:1rem;
width:79%;
curser:pointer;
border-radius:5px;
border:2px solid #CD5888;`

const Input = styled.input`
padding:1em;
width:70%;
border-radius:5px;
background:whitesmoke;
border:2px solid lightGreay;
background: transparent;
`
const Typography = styled.div``
const Typography1 = styled.div`
display:flex;
gap:2em;
padding-top:2em;
flex-direction:column;
align-items:center;
`
const Box = styled.div`
width:35%;
padding:3em;
margin:0 auto;
border-radius:10px;
background:white;
border:2px solid  lightGrey;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%) ;

`

const ButtonConfirm = styled.div`
 margin-right: 21em;

 `

const Paragraph = styled.p`
font-size:1.1em;`

const HeadingMethod = styled.h2`
text-align:center;
margin-bottom:1em;`


const BookingModal = ({ isOpen, setIsOpen }) => {
    const [formData, setformData] = useState({
        phoneNumber: "",
        amount: "",
    })

    async function payment() {

        try {

            console.log("Hello")

            const url = "https://stumpesa.onrender.com/api/stk/push"


            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)

            }


            const paymentRequest = await fetch(url, options)



            // const res = await paymentRequest.json()

            console.log(paymentRequest)
        } catch (error) {
            console.log(error)
        }

    }








    return (
        <Box sx={styled}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
                <HeadingMethod>Payment Method</HeadingMethod>
                <Paragraph>We recommend each hosteller to pay the commitment fee based on the  percentage of the toal amount of the hostel .</Paragraph>

                <Paragraph> We may return part ofthe commitment fee if the student is not pleased with the hostel choosen.</Paragraph>
            </Typography>

            <Typography1 id="modal-modal-description" sx={{ mt: 2 }}>
                <Input type="text" placeholder="Amount" onChange={(e) => setformData({ ...formData, amount: e.target.value })} />
                <Input type="text" placeholder="Enter phone number" onChange={(e) => setformData({ ...formData, phoneNumber: e.target.value })} />
                <ButtonConfirm>
                    <Button onClick={payment}>Confirm Payment</Button>
                </ButtonConfirm>
                <Buttons onClick={() => setIsOpen(false)}>Cancel</Buttons>

            </Typography1>
        </Box>
    )
}

export default BookingModal;
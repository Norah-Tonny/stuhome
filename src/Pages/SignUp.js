import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";
import Footer from "../components/Footer";
import SignUpItems from "../components/SignUpItems";


const SignUpContainer=styled.div``
const para= styled.p``

const SignUp = () => {

  return (
    <SignUpContainer>
      <Nav />
      <SignUpItems/>
      <Footer/>
    </SignUpContainer>
  );
};

export default SignUp;  
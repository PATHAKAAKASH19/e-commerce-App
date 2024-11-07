import React from 'react'
import Container from "../../components/ui/container/Container";
import SignupWithEmail from '../../components/SignupWithEmail/SignupWithEmail';


export default function Signup() {
  return (
    <Container className="signup">
      <Container className="box1">
         <SignupWithEmail></SignupWithEmail>
      </Container>
    </Container>
  )
}

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/ui/container/Container";
import Form from "../../components/form/Form";
import Title from "../../components/ui/title/Title";
import Button from "../../components/ui/button/Button";

export default function Auth() {
  const [formData, setFormData] = useState({
    email: "akash",
    password: "12333212223",
  });

  const { auth } = useParams();

  const navigate = useNavigate();

  const handleForm = async (e) => {
    console.log("ajas");
    e.preventDefault();
    console.log("akash1");
    try {
      // const res = await fetch(`http://localhost:3000/api/auth/${auth.toLowerCase()}`, {
      //   method: "POST",
      //   headers: {
      //     "content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const data = await res.json()
      // if (auth.toLowerCase === "signup"  && res.ok) {
      //   setFormData({
      //     email: "",
      //     password: "",
      //   })
      //   navigate("../login");
      // }else if(auth.toLowerCase === "login" && res.ok){
      //     setFormData({
      //       email: "",
      //       password:"",
      //     })
      //     navigate("../../home")
      // }else {
      //     console.log(`error: ${res.error}`)
      // }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container className={auth}>
      <Container className="box1">
        <Title title={`${auth} with email`} />
        <h3>please enter your email id</h3>
        <Form
          btnTitle={`${auth}`}
          formData={formData}
          handleInput={handleInput}
          handleForm={handleForm}
        ></Form>
        <div></div>
        <h3>or {`${auth}`} with mobile No</h3>
        <div></div>
      </Container>
    </Container>
  );
}

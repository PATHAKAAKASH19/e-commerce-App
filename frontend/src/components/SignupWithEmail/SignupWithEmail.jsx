import React from "react";

import Title from "../../components/ui/title/Title";
import InputBox from "../../components/ui/inputBox/InputBox";
import Button from "../../components/ui/button/Button";

export default function SignupWithEmail() {
  return (
    <>
      <Title title="SignUp with email" />
      <h3>please enter your email id</h3>
      <label htmlFor="email">email</label>
      <InputBox
        type="text"
        placeholder="enter your email"
        name="email"
        id="email"
      ></InputBox>

      <label htmlFor="password">password</label>
      <InputBox
        type="password"
        placeholder="enter your password"
        name="password"
        id="password"
      ></InputBox>

      <Button title="login"></Button>

      <div></div>
      <h3>or Sign up with mobile No</h3>
      <div></div>
      <Button title="mobile no"></Button>
    </>
  );
}

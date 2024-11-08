import React, { useState } from "react";
import InputBox from "../ui/inputBox/InputBox";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";

export default function Form({ btnTitle, formData, handleInput, handleForm }) {
  const [show, setShow] = useState(false);

  const changeShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <form onSubmit={handleForm}>
      <label htmlFor="email">email</label>
      <InputBox
        type="text"
        placeholder="enter your email"
        name="email"
        id="email"
        required
        value={formData.email}
        onChange={handleInput}
      ></InputBox>

      <label htmlFor="password">password</label>
      <InputBox
        type={!show ? "password" : "text"}
        placeholder="enter your password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleInput}
        required
      ></InputBox>

      {!show ? (
        <VscEye onClick={changeShow} />
      ) : (
        <VscEyeClosed onClick={changeShow} />
      )}
      <button type="submit">{btnTitle}</button>
    </form>
  );
}

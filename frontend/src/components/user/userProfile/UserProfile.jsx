import React, { useEffect, useState } from "react";
import Container from "../../ui/container/Container";
import InputBox from "../../ui/inputBox/InputBox";
import { CiEdit } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useUserInfo } from "../../../context/UserInfoContext";
import { useAuth } from "../../../context/AuthContext";
import { toast, Toaster } from "react-hot-toast";

export default function UserProfile() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
  });

  const [disabled, setDisabled] = useState(true);

  const { userInfo, setUserInfo } = useUserInfo();
  // const { userId } = useAuth();

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length !== 0) {
      setUserData({
        firstName: userInfo.firstName || "",
        lastName: userInfo.lastName || "",
        email: userInfo.email || "",
        phoneNo: userInfo.phoneNo || "",
      });
    }
  }, [userInfo, disabled]);

  const handleFormEdit = () => {
    setDisabled((prev) => !prev);
  };

  const handleInput = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUserForm = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(
        `http://192.168.0.104:3000/api/user/678761ba46047b57d7132fad`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(userData),
        }
      );

      const data = await res.json();

      if (res.status === 200) {
        setUserInfo(data.userData);
        toast.success(`${data.message}`);
        handleFormEdit();
      }
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <Container className="user-profile-box">
      <Toaster></Toaster>
      {disabled ? (
        <CiEdit onClick={handleFormEdit} className="edit-icon" />
      ) : (
        <AiOutlineCloseCircle onClick={handleFormEdit} className="edit-icon" />
      )}
      <form onSubmit={handleUserForm}>
        <Container className="flex-box">
          <label htmlFor="firstName">First Name</label>
          <InputBox
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleInput}
            disabled={disabled}
            id="firstName"
          />
        </Container>
        <Container className="flex-box">
          <label htmlFor="lastName">Last Name</label>
          <InputBox
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleInput}
            disabled={disabled}
            id="lastName"
          />
        </Container>
        <Container className="flex-box">
          <label htmlFor="email1">Email</label>
          <InputBox
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInput}
            disabled={disabled}
            id="email1"
          />
        </Container>
        <Container className="flex-box">
          <label htmlFor="phoneNo">Phone No</label>
          <InputBox
            type="text"
            name="phoneNo"
            value={userData.phoneNo}
            onChange={handleInput}
            disabled={disabled}
            id="phoneNo"
          />
        </Container>

        {!disabled && <button type="submit">Save</button>}
      </form>
    </Container>
  );
}

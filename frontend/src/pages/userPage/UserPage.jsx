import React from "react";
import Container from "../../components/ui/container/Container";
import { Outlet, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBagCheck } from "react-icons/bs";

export default function UserPage() {
  return (
    <Container className="user-box">
      <Container className="user-sub-box">
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active-link"
          }
        >
          <CgProfile className="user-sub-box-icon" />
          <h1 className="h1">Profile</h1>
        </NavLink>

        <NavLink
          to="address"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active-link"
          }
        >
          <IoLocationOutline className="user-sub-box-icon" />
          <h1 className="h1">Address</h1>
        </NavLink>

        <NavLink
          to="wishlist"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active-link"
          }
        >
          <IoMdHeartEmpty className="user-sub-box-icon" />
          <h1 className="h1">Wishlist</h1>
        </NavLink>

        <NavLink
          to="orders"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active-link"
          }
        >
          <BsBagCheck className="user-sub-box-icon" />
          <h1 className="h1">My Orders</h1>
        </NavLink>

        <NavLink
          to="changePassword"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active-link"
          }
        >
          <RiLockPasswordLine className="user-sub-box-icon" />
          <h1 className="h1">Change Password</h1>
        </NavLink>
      </Container>

      <Outlet />
    </Container>
  );
}

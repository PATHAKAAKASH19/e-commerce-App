import { useEffect } from "react";
import {  NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/ui/container/Container";
import { useSellerAuth } from "../../context/SellerAuthContext";

export default function SellerPage() {


  const {sellerToken, setSellerToken} = useSellerAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if(!sellerToken && !localStorage.getItem("sellerAccessToken")){
      navigate(`/seller/login` ,{state:{from : location, sellerAuth:true}} )
    }else if(!sellerToken && localStorage.getItem("sellerAccessToken")){
       setSellerToken(localStorage.getItem("sellerAccessToken"))
    }
   
  }, [sellerToken, location, navigate, setSellerToken])


   useEffect(() => {
       window.scrollTo(0, 0);
    }, []);
  
  return (
    <Container className="admin">
      <Container className="admin-sidebar">
        <NavLink
          to="create-category"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active-link"
          }
        >
          <h1 className="h1">Create Category</h1>
        </NavLink>

        <NavLink
          to="create-product"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active-link"
          }
        >
          <h1 className="h1">Create Product</h1>
        </NavLink>

        <NavLink
          to="products"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active-link"
          }
        >
          <h1 className="h1">Products</h1>
        </NavLink>

        <NavLink
          to="orders"
          className={({ isActive }) =>
            isActive ? "active-link" : "not-active-link"
          }
        >
          <h1 className="h1">Orders</h1>
        </NavLink>
      </Container>
      <Outlet></Outlet>
    </Container>
  );
}

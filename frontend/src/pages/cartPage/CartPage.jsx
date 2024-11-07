import React from "react";

import InputBox from "../../components/ui/inputBox/InputBox";
import Container from "../../components/ui/container/Container";
import Button from "../../components/ui/button/Button";

export default function CartPage() {


  
  return (
    <Container className="cart">
      <Container className="product-con">
        <Container className="product-list">akash</Container>
      </Container>

      <Container className="price-con">
        <Container className="sub-con">
          <Container className="discount-box">
            <InputBox
              type="text"
              placeholder="add discount code"
              name="discount"
              required={true}
            ></InputBox>

            <Button title="Apply" route="/route" className="discount-btn" />
          </Container>

          <Container className="sub-total">
            <h3>subtotal</h3>
            <h3>inr 2000</h3>
          </Container>

          <Container className="shipping-cost">
            <h3>shipping cost</h3>
            <h3>inr 2000</h3>
          </Container>

          <Container className="total">
            <h2>total</h2>
            <h2>inr 2000</h2>
          </Container>
        </Container>

        
          <Button title="CHECKOUT" route="/route"  className="checkout-btn"/>
        
      </Container>
    </Container>
  );
}
